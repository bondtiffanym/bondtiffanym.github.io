<template>
  <v-dialog
    v-model="privacyOpen"
    class="privacy-dialog"
    max-width="800"
    scrollable
  >
    <v-card class="bg-[var(--site-bg-mid)] xl:p-4">
      <v-card-title
        class="flex items-center justify-between w-full pt-4 xl:py-4 px-6"
      >
        <span class="text-2xl font-bold">
          <span class="text-gradient-brand">Privacy</span>
        </span>
        <v-icon-btn
          icon="mdi-close"
          variant="text"
          class="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl"
          aria-label="Close privacy policy"
          @click="privacyOpen = false"
        />
      </v-card-title>
      <v-card-text
        class="px-6 pb-6 flex flex-col gap-4 text-base font-light leading-relaxed"
      >
        <p>
          The contact form is the only place this site asks for personal
          information.
        </p>
        <p>
          <span class="font-normal">What I collect.</span>
          Your name, email address, and message.
        </p>
        <p>
          <span class="font-normal">Why.</span>
          I use them only to read your note and reply. I do not add your address
          to a mailing list, and I do not sell or share it for advertising.
        </p>
        <p>
          <span class="font-normal">Who else receives it.</span>
          The form is delivered by
          <a
            class="privacy-link"
            href="https://web3forms.com"
            target="_blank"
            rel="noopener noreferrer"
            >Web3Forms</a
          >. They receive the submission so they can email it to me, and they
          store a copy. Submissions are kept for up to three years unless a
          shorter period is set for the form. They may also receive technical
          details such as your IP address and the time you submitted. Their
          service runs on Amazon Web Services, Cloudflare, and Hetzner. Their
          policy is at
          <a
            class="privacy-link"
            href="https://web3forms.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            >web3forms.com/privacy</a
          >.
        </p>
        <p>
          <span class="font-normal">How long I keep it.</span>
          I keep the message in my inbox while the conversation is active, then
          delete it. Web3Forms deletes its copy on the schedule above.
        </p>
        <p>
          <span class="font-normal">Questions or deletion.</span>
          Email
          <a class="privacy-link" href="mailto:tiffany@tmbond.com"
            >tiffany@tmbond.com</a
          >
          to ask what I have from you, or to ask me to delete it.
        </p>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref } from "vue";

const privacyOpen = ref(false);

const open = () => {
  privacyOpen.value = true;
};

const close = () => {
  privacyOpen.value = false;
};

defineExpose({
  open,
  close,
});
</script>

<style scoped>
.privacy-dialog {
  --v-overlay-opacity: 0.6;
}

.privacy-link {
  color: var(--site-text-quaternary-color);
  text-decoration: underline;
  text-underline-offset: 2px;
}
</style>
