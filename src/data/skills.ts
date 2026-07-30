interface Category {
    name: string;
    skills: Skill[];
}
interface Skill {
    name: string;
    icon: string;
}

export const categories: Category[] = [
    {
        name: 'Languages',
        skills: [
            {
                name: 'HTML',
                icon: 'devicon-html5-plain',
            },
            {
                name: 'CSS',
                icon: 'devicon-css3-plain',
            },
            {
                name: 'JavaScript',
                icon: 'devicon-javascript-plain',
            },
            {
                name: 'TypeScript',
                icon: 'devicon-typescript-plain',
            },
            {
                name: 'Elixir',
                icon: 'devicon-elixir-plain',
            },
            {
                name: 'Ruby',
                icon: 'devicon-ruby-plain',
            }

        ],
    },
    {
        name: 'Frameworks & Libraries',
        skills: [
            {
                name: 'React',
                icon: 'devicon-react-plain',
            },
            {
                name: 'React Native',
                icon: 'devicon-reactnative-original',
            },
            {
                name: 'Vue.js',
                icon: 'devicon-vuejs-plain',
            },
            {
                name: 'Vuetify',
                icon: 'devicon-vuetify-plain',
            },
            {
                name: 'Phoenix',
                icon: 'devicon-phoenix-plain',
            },
            { name: 'Tailwind CSS',
                icon: 'devicon-tailwindcss-plain',
            },
            { name: 'Sass',
                icon: 'devicon-sass-original',
            },
            { name: 'Bootstrap',
                icon: 'devicon-bootstrap-plain',
            },
            { name: 'Material UI',
                icon: 'devicon-materialui-plain',
            },
            {
                name: 'Ruby on Rails',
                icon: 'devicon-rails-plain',
            },
            {
                name: 'NestJS',
                icon: 'devicon-nestjs-plain',
            }
        ],
    },
    {
        name: 'Database & Cloud',
        skills: [
            {
                name: 'MongoDB',
                icon: 'devicon-mongodb-plain',
            },
            {
                name: 'MySQL',
                icon: 'devicon-mysql-plain',
            }
        ],
    },
    {
        name: 'DevOps',
        skills: [
            {
                name: 'Docker',
                icon: 'devicon-docker-plain',
            },
        ],
    },
    {
        name: 'Tools',
        skills: [
            {
                name: 'Git',
                icon: 'devicon-git-plain',
            },
        ],
    }
];