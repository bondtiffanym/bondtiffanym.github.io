interface Category {
    name: string;
    skills: Skill[];
}


interface Icon {
    name: string;
    icon: string;
    color?: string;
}

interface SVGIcon {
    name: string;
    src: string;
}

type Skill = Icon | SVGIcon;

export const categories: Category[] = [
    {
        name: 'Languages',
        skills: [
            {
                name: 'HTML',
                src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
            },
            {
                name: 'CSS',
                src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
            },
            {
                name: 'JavaScript',
                src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
            },
            {
                name: 'TypeScript',
                icon: 'devicon-typescript-plain colored',
            },
            {
                name: 'Elixir',
                src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/elixir/elixir-original.svg',
            },
            {
                name: 'Ruby',
                src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ruby/ruby-original.svg',
            },
            {
                name: 'GraphQL',
                icon: 'devicon-graphql-plain colored',
            }

        ],
    },
    {
        name: 'Frameworks & Libraries',
        skills: [
            {
                name: 'React',
                src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
            },
            {
                name: 'React Native',
                src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactnative/reactnative-original.svg',
            },
            {
                name: 'Gatsby',
                icon: 'devicon-gatsby-plain colored',
            },
            {
                name: 'Vue.js',
                src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg',
            },
            {
                name: 'Vuetify',
                src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuetify/vuetify-original.svg',
            },
            {
                name: 'Phoenix',
                icon: 'devicon-phoenix-plain colored',
            },
            { 
                name: 'Tailwind CSS',
                icon: 'devicon-tailwindcss-plain colored',
            },
            { 
                name: 'Sass',
                icon: 'devicon-sass-original colored',
            },
            { 
                name: 'Bootstrap',
                src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg',
            },
            { 
                name: 'Material UI',
                src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg',
            },
            {
                name: 'Ruby on Rails',
                src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rails/rails-original-wordmark.svg',
            },
            {
                name: 'NestJS',
                icon: 'devicon-nestjs-plain colored',
            },
            {
                name: 'Lodash',
                src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/lodash/lodash-original.svg',
            },
            {
                name: 'Axios',
                icon: 'devicon-axios-plain colored',
            },
            {
                name: 'Redux',
                icon: 'devicon-redux-plain colored',
            },
            {
                name: 'Jest',
                icon: 'devicon-jest-plain colored',
            },
            { 
                name: 'Playwright', 
                src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/playwright/playwright-original.svg'
            },
            { 
                name: 'Cypress', 
                src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cypressio/cypressio-original.svg'
             },
            { 
                name: 'Storybook', 
                icon: 'devicon-storybook-plain colored'
             },
        ],
    },
    {
        name: 'Database & Cloud',
        skills: [
            {
                name: 'MongoDB',
                src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
            },
            {
                name: 'SQL',
                src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg',
            },
            {
                name: 'MySQL',
                icon: 'devicon-mysql-plain colored',
            },
            {
                name: 'AWS',
                src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
            },
        ],
    },
    {
        name: 'DevOps',
        skills: [
            {
                name: 'Docker',
                src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
            },
            {
                name: 'Git',
                icon: 'devicon-git-plain colored',
            },
            {
                name: 'GitHub',
                icon: 'devicon-github-plain colored',
            },
            {
                name: 'GitHub Actions',
                src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg',
            },
            {
                name: 'BitBucket',
                src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bitbucket/bitbucket-original.svg',
            },
            {
                name: 'CircleCI',
                icon: 'devicon-circleci-plain colored',
            },
            {
                name: 'Jenkins',
                src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg',
            },
            {
                name: 'Kibana',
                src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kibana/kibana-original.svg',
            },
        ],
    },
    {
        name: 'Tools',
        skills: [
            {
                name: 'VS Code',
                src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg',
            },
            {
                name: 'ESLint',
                src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/eslint/eslint-original.svg',
            },
            { 
                name: 'Jira', 
                src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg', 
            },
            { 
                name: 'Confluence', 
                src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/confluence/confluence-original.svg', 
            },
            {
                name: 'Postman',
                icon: 'devicon-postman-plain colored',
            },
            {
                name: 'Swagger',
                src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swagger/swagger-original.svg',
            },
            {
                name: 'Figma',
                src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg',
            },
            {
                name: 'Homebrew',
                src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/homebrew/homebrew-original.svg',
            },
            {
                name: 'npm',
                src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original.svg',
            },
            {
                name: 'yarn',
                icon: 'devicon-yarn-plain colored',
            },
            {
                name: 'Linux',
                src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg',
            },
        ],
    },
    {
        name: 'AI',
        skills: [
            {
                name: 'Claude',
                src: 'https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/claude/default.svg',
            },
            {
                name: 'OpenAI',
                src: 'https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/openai/light.svg',
            },
            {
                name: 'Cursor',
                src: 'https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/cursor/light.svg'
            }
        ]
    }
];