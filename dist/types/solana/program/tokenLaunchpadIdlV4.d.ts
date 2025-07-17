export declare const IDL_V4: {
    version: string;
    name: string;
    instructions: {
        name: string;
        accounts: ({
            name: string;
            isMut: boolean;
            isSigner: boolean;
            docs?: undefined;
        } | {
            name: string;
            isMut: boolean;
            isSigner: boolean;
            docs: string[];
        })[];
        args: {
            name: string;
            type: {
                defined: string;
            };
        }[];
    }[];
    accounts: {
        name: string;
        type: {
            kind: string;
            fields: ({
                name: string;
                type: string;
            } | {
                name: string;
                type: {
                    defined: string;
                };
            })[];
        };
    }[];
    types: ({
        name: string;
        type: {
            kind: string;
            variants: {
                name: string;
            }[];
            fields?: undefined;
        };
    } | {
        name: string;
        type: {
            kind: string;
            fields: {
                name: string;
                type: {
                    option: string;
                };
            }[];
            variants?: undefined;
        };
    } | {
        name: string;
        type: {
            kind: string;
            fields: {
                name: string;
                type: string;
            }[];
            variants?: undefined;
        };
    })[];
    events: {
        name: string;
        fields: ({
            name: string;
            type: string;
            index: boolean;
        } | {
            name: string;
            type: {
                defined: string;
            };
            index: boolean;
        })[];
    }[];
    errors: {
        code: number;
        name: string;
        msg: string;
    }[];
    metadata: {
        address: string;
    };
};
//# sourceMappingURL=tokenLaunchpadIdlV4.d.ts.map