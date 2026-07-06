import {
    SiJavascript,
    SiTypescript,
    SiNodedotjs,
    SiExpress,
    SiReact,
    SiMongodb,
    SiGraphql,
    SiDocker,
    SiRedux,
    SiTailwindcss,
    SiGit,
    SiPostman,
    SiHtml5,
    SiCss,
    SiNestjs,
} from "react-icons/si";

import { TbTopologyStar3, TbRoute } from "react-icons/tb";

const skillCategories = [
    {
        title: "Programming Languages",
        skills: [
            {
                name: "JavaScript (ES6+)",
                icon: SiJavascript,
                color: "text-yellow-400",
            },
            {
                name: "TypeScript",
                icon: SiTypescript,
                color: "text-blue-500",
            },
        ],
    },

    {
        title: "Frontend",
        skills: [
            {
                name: "HTML5",
                icon: SiHtml5,
                color: "text-orange-500",
            },
            {
                name: "CSS3",
                icon: SiCss,
                color: "text-blue-500",
            },
            {
                name: "Tailwind CSS",
                icon: SiTailwindcss,
                color: "text-sky-400",
            },
            {
                name: "React",
                icon: SiReact,
                color: "text-cyan-400",
            },
            {
                name: "React Router",
                icon: TbRoute,
                color: "text-pink-400",
            },
            {
                name: "Redux Toolkit & RTK Query",
                icon: SiRedux,
                color: "text-purple-500",
            },
        ],
    },

    {
        title: "Backend",
        skills: [
            {
                name: "Node.js",
                icon: SiNodedotjs,
                color: "text-green-500",
            },
            {
                name: "Express.js",
                icon: SiExpress,
                color: "text-gray-300",
            },
            {
                name: "NestJS",
                icon: SiNestjs,
                color: "text-red-500",
            },
            {
                name: "GraphQL",
                icon: SiGraphql,
                color: "text-pink-500",
            },
            {
                name: "Microservices",
                icon: TbTopologyStar3,
                color: "text-cyan-400",
            },
        ],
    },

    {
        title: "Database & Tools",
        skills: [
            {
                name: "MongoDB",
                icon: SiMongodb,
                color: "text-green-600",
            },
            {
                name: "Docker",
                icon: SiDocker,
                color: "text-blue-400",
            },
            {
                name: "Git",
                icon: SiGit,
                color: "text-orange-500",
            },
            {
                name: "Postman",
                icon: SiPostman,
                color: "text-orange-400",
            },
        ],
    },
];

function Skills() {
    return (
        <section id="skills" className="max-w-7xl mx-auto px-6 py-16">
            <h2 className="text-4xl font-bold text-center mb-12">
                Technical Skills
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {skillCategories.map((category) => (
                    <div
                        key={category.title}
                        className="border border-gray-700 rounded-xl p-6 hover:border-cyan-400 transition-all duration-300"
                    >
                        <h3 className="text-xl font-semibold mb-6">
                            {category.title}
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {category.skills.map((skill) => {
                                const Icon = skill.icon;

                                return (
                                    <div
                                        key={skill.name}
                                        className="flex items-center gap-3 p-3 rounded-lg "
                                    >
                                        <Icon size={28} className={skill.color} />

                                        <span className="text-sm font-medium">
                                            {skill.name}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;