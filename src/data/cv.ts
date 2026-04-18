export interface CV {
    name: string,
    title: string,
    location: string,
    locationLink: string,
    about: string,
    summary: string,
    personalWebsiteUrl: string,
    contact: Contact;
    work: Work[];
    education: Education[];
    skills: string[];
}

export interface Contact {
    email: string,
    tel: string,
    social: Social[];
}

export interface Social {
    name: string;
    url: string;
}

export interface Work {
    company: string;
    link: string;
    title: string;
    start: string;
    end: string | null;
    description: string;
    achievements?: string[];
    badges?: string[];
}

export interface Education {
    school: string;
    degree: string;
    start: string;
    end: string | null;
}

export const CV_DATA: CV = {
    name: "Santiago Martínez",
    title: "Software Engineer",
    location: "Buenos Aires, Argentina",
    locationLink: "https://maps.app.goo.gl/2UMAWK8TRN7hHrir8",
    about: "Software Engineer enfocado en desarrollo backend y sistemas escalables.",
    summary: `Software Engineer con más de 6 años de experiencia desarrollando aplicaciones backend escalables y de alto rendimiento. Especializado en Java y Spring Boot, con sólida trayectoria en arquitecturas de microservicios, sistemas distribuidos y entornos cloud. Trabajé en proyectos de fintech, e-commerce y logística para empresas líderes del mercado argentino.`,
    personalWebsiteUrl: "https://smartinez.dev",
    contact: {
        email: "santiago.martinez.dev@gmail.com",
        tel: "+5491156789012",
        social: [
            { name: "GitHub", url: "https://github.com/santiagomdev" },
            { name: "LinkedIn", url: "https://linkedin.com/in/santiago-martinez-dev" },
        ],
    },
    work: [
        {
            company: "Ualá",
            link: "https://www.linkedin.com/company/uala/",
            title: "Senior Software Engineer",
            start: "Marzo 2022",
            end: null,
            description: "Desarrollo y mantenimiento de microservicios críticos para la plataforma de pagos y billetera digital de Ualá.",
            achievements: [
                "Diseñé e implementé microservicios con Java 17 y Spring Boot para procesamiento de transacciones en tiempo real.",
                "Optimicé pipelines de Kafka reduciendo la latencia de eventos un 40% en el módulo de notificaciones.",
                "Lideré la migración de un módulo monolítico a microservicios, coordinando un equipo de 4 ingenieros.",
                "Implementé autenticación OAuth2 + JWT para la integración con proveedores de pago externos.",
                "Monitoré la salud del sistema con Grafana y alertas en AWS CloudWatch para garantizar alta disponibilidad.",
            ],
            badges: ["Java 17", "Spring Boot", "Kafka", "Redis", "PostgreSQL", "Docker", "Kubernetes", "AWS", "OAuth2", "JWT", "JUnit", "Mockito", "REST", "OpenAPI", "Grafana"],
        },
        {
            company: "Mercado Libre",
            link: "https://www.linkedin.com/company/mercado-libre/",
            title: "Software Engineer",
            start: "Agosto 2019",
            end: "Febrero 2022",
            description: "Desarrollo de servicios backend para el ecosistema de logística y fulfillment del marketplace.",
            achievements: [
                "Desarrollé APIs RESTful con Java 11 y Spring Boot para gestión de órdenes y seguimiento de envíos.",
                "Implementé soluciones de caché con Redis que mejoraron el tiempo de respuesta un 35% en horarios pico.",
                "Construí dashboards internos con React y TypeScript para el equipo de operaciones logísticas.",
                "Participé en guardias de producción y resolución de incidentes en sistemas de alta disponibilidad.",
            ],
            badges: ["Java 11", "Spring Boot", "React", "TypeScript", "MySQL", "Redis", "Docker", "AWS", "Maven", "JUnit"],
        },
        {
            company: "Despegar.com",
            link: "https://www.linkedin.com/company/despegar/",
            title: "Junior Software Engineer",
            start: "Enero 2018",
            end: "Julio 2019",
            description: "Desarrollo fullstack en el módulo de reservas y pagos de la plataforma de viajes.",
            achievements: [
                "Implementé integraciones con APIs de aerolíneas y sistemas GDS usando Java y Spring MVC.",
                "Colaboré en el rediseño del flujo de checkout, contribuyendo a reducir la tasa de abandono un 15%.",
                "Desarrollé componentes frontend con React para la nueva versión del buscador de vuelos.",
                "Escribí tests unitarios y de integración con JUnit y Mockito, alcanzando un 80% de cobertura en los módulos asignados.",
            ],
            badges: ["Java 8", "Spring MVC", "React", "JavaScript", "PostgreSQL", "Maven", "Jenkins", "JUnit", "Mockito"],
        },
    ],
    education: [
        {
            school: "Universidad de Buenos Aires (UBA)",
            degree: "Licenciatura en Ciencias de la Computación — Facultad de Ciencias Exactas y Naturales",
            start: "2013",
            end: "2018",
        },
    ],
    skills: [
        "Java (8, 11, 17)", "Spring Boot", "Hibernate", "Kafka", "Maven", "AWS", "React", "TypeScript", "SQL",
        "PostgreSQL", "MySQL", "Redis", "Docker", "Kubernetes", "JUnit", "Mockito", "REST", "Git", "CI/CD",
    ],
};