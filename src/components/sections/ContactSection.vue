<template>
  <v-divider thickness="2" />
  <div
    id="contact"
    class="section-scroll-target flex flex-col px-4 sm:px-8 md:px-24 xl:px-42 my-24"
  >
    <h2 class="text-3xl font-bold">
      <span class="text-gradient-brand">Contact Me</span>
    </h2>
    <v-card
      variant="elevated"
      class="p-8 lg:p-12 bg-[var(--site-bg-mid)] mt-8 lg:mt-16"
    >
      <div class="flex flex-col lg:flex-row justify-between w-full">
        <div class="flex flex-row lg:flex-col gap-16 lg:gap-4 w-full lg:w-1/2">
          <!-- contact info -->
          <div class="flex flex-col gap-4">
            <p class="text-xl font-bold">Contact Info</p>
            <div
              v-for="info in contactInfo"
              :key="info.label"
              class="flex gap-4"
            >
              <div class="rounded-full bg-[var(--site-bg-spotlight)] p-2">
                <v-icon
                  :icon="info.icon"
                  class="text-gradient-brand"
                  size="36"
                />
              </div>
              <div>
                <p class="text-base font-light text-gray-400">
                  {{ info.label }}
                </p>
                <a
                  v-if="info.link"
                  :href="info.link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p class="text-lg">{{ info.value }}</p>
                </a>
                <p v-else class="text-lg">{{ info.value }}</p>
              </div>
            </div>
          </div>
          <!-- social links -->
          <div class="flex flex-col gap-4 lg:mt-8">
            <p class="text-xl font-bold">Follow Me</p>
            <div class="flex gap-4">
              <div
                v-for="link in socialLinks"
                :key="link.label"
                class="flex gap-4"
              >
                <a
                  class="rounded-full bg-[var(--site-bg-spotlight)] p-2"
                  :aria-label="link.label"
                  :href="link.link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <v-icon
                    :icon="link.icon"
                    class="text-gradient-brand"
                    size="28"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <!-- Form -->
        <div class="flex flex-col gap-4 w-full lg:w-1/2 mt-8 lg:mt-0">
          <div class="mb-4">
            <p class="text-xl font-bold">Get In Touch</p>
            <p class="text-base font-light">
              I'm always open to discussing new opportunities and interesting
              projects.
            </p>
          </div>
          <v-form
            ref="formRef"
            class="contact-form"
            @submit.prevent="handleSubmit"
          >
            <div class="flex gap-6 mb-2">
              <v-text-field
                label="Name"
                variant="solo-filled"
                v-model="name"
                required
                :rules="[required]"
              />
              <v-text-field
                label="Email"
                variant="solo-filled"
                v-model="email"
                required
                type="email"
                :rules="emailRules"
              />
            </div>
            <v-textarea
              label="Message"
              variant="solo-filled"
              rows="8"
              no-resize
              v-model="message"
              required
              :rules="[required]"
              class="mb-2"
            />
            <v-btn
              variant="outlined"
              rounded="sm"
              class="bg-[var(--site-text-secondary-color)] text-white p-3"
              type="submit"
              >Send Message</v-btn
            >
            <p
              v-if="result === 'Success'"
              class="text-sm font-light text-[var(--site-text-quaternary-color)] mt-2"
            >
              <v-icon icon="mdi-check" size="sm" />
              Message sent successfully!
            </p>
            <p
              v-if="result === 'Error'"
              class="text-sm font-light text-error mt-2"
            >
              <v-icon icon="mdi-alert" class="text-error" size="sm" />
              An unexpeced error occurred. Please try again.
            </p>
          </v-form>
        </div>
      </div>
    </v-card>
  </div>
  <v-divider thickness="2" />
  <div class="flex my-4">
    <!-- copyright -->
    <div class="flex w-full justify-center">
      <p class="text-sm font-light text-gray-400">
        Developed with &#9825; by Tiffany Bond. &copy;
        {{ new Date().getFullYear() }}. All rights reserved.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

type ContactForm = {
  validate: () => Promise<{
    valid: boolean;
    errors: { errorMessages: string[] }[];
  }>;
  reset: () => void;
  resetValidation: () => void;
  isValid: boolean;
};

const formRef = ref<ContactForm | null>(null);
const name = ref("");
const email = ref("");
const message = ref("");
const result = ref<"Success" | "Error" | null>(null);

const contactInfo = [
  {
    icon: "mdi-email",
    label: "Email",
    value: "tiffany@tmbond.com",
    link: "mailto:tiffany@tmbond.com",
  },
  {
    icon: "mdi-phone",
    label: "Phone",
    value: "+1 (513) 341-8567",
    link: "tel:+15133418567",
  },
  {
    icon: "mdi-map-marker",
    label: "Location",
    value: "Cincinnati, OH",
  },
];

const socialLinks = [
  {
    icon: "mdi-linkedin",
    link: "https://www.linkedin.com/in/bondtiffanym/",
    label: "LinkedIn",
  },
  {
    icon: "mdi-github",
    link: "https://github.com/bondtiffanym",
    label: "GitHub",
  },
];

const required = (value: string) => {
  if (value) return true;

  return "This field is required.";
};

const emailRules = [
  required,
  (value: string) => {
    if (/.+@.+\..+/.test(value)) return true;

    return "Email must be valid.";
  },
];

const handleSubmit = async () => {
  if (!formRef.value) {
    result.value = "Error";
    throw new Error("Form reference is not set");
  }
  if (!formRef.value.isValid) return;

  try {
    await sendMessage();
    result.value = "Success";
    formRef.value.reset();
    formRef.value.resetValidation();
  } catch {
    result.value = "Error";
  }
};

const sendMessage = async () => {
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
  if (!accessKey) {
    throw new Error("Missing Web3Forms access key");
  }

  const formData = new FormData();
  formData.append("name", name.value);
  formData.append("email", email.value);
  formData.append("message", message.value);
  formData.append("access_key", accessKey);

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Request failed");
  }
};
</script>

<style scoped>
.contact-form :deep(.v-field-label) {
  margin-inline-start: var(--v-field-padding-start);
  margin-inline-end: var(--v-field-padding-end);
}

.contact-form :deep(.v-field__input) {
  padding-inline: var(--v-field-padding-start) var(--v-field-padding-end);
  padding-top: calc(var(--v-field-input-padding-top) + 4px);
  padding-bottom: var(--v-field-input-padding-bottom);
}

.contact-form :deep(input.v-field__input) {
  min-height: calc(var(--v-input-control-height, 56px) + 4px);
}
.contact-form :deep(textarea) {
  resize: none;
}
</style>
