import { HelloProps } from "./types";

export function Hello({ firstName, lastName }: HelloProps) {
    const hello = `Hello ${firstName}${lastName ? ` ${lastName}` : ''}`;
    console.log(hello);
}
