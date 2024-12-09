export interface LinksConfig {
    fullName: string;
    bio?: string;
    avatar?: string;
    links?: Link[];
    socials?: Social[];
}

export interface Link {
    title: string;
    url: string;
    icon?: string;
    color?: string;
    classes?: string;
}

export interface Social {
    title: string;
    url: string;
    icon: string;
}