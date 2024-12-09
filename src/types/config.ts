export interface LinksConfig {
    fullName: string;
    theme: string;
    page: Page;
    bgImage?: string;
    bgColor?: string;
    bio?: string;
    location?: string;
    avatar?: string;
    links?: Link[];
    socials?: Social[];
}

export interface Page {
    title: string;
    description: string;
    keywords: string;
    bodyClasses?: string;
}

interface Link {
    title: string;
    url: string;
    icon?: string;
    color?: string;
    classes?: string;
}

interface Social {
    title: string;
    url: string;
    icon: string;
}