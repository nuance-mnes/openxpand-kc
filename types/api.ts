
export interface ApiCallerProps {
    accessToken: string;
    environment: string;
    scope: string[];
}

export interface MakeRequestOptions {
    method?: string;
    url: string;
    data?: object;
    headers?: object;
}


export interface StepWizardProps {
    title: string;
    env: FormDataWithCode;
}


export interface FormData {
    clientId: string;
    clientSecret: string;
    tenant: string;
    scope: string[];
    environment: string;
}

export interface FormDataWithCode extends FormData {
    code: string | null;
    host: string;
}