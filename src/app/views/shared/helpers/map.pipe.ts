import { Pipe, PipeTransform } from "@angular/core";

// https://medium.com/emoteev-blog/call-functions-in-angular-templates-the-good-way-f025f65b0e55
@Pipe({ name: "map" })
export class MapPipe implements PipeTransform {

    transform<T, R>(
        thisArg: T,
        project: (t: T, ...others: any[]) => R,
        ...args: any[]
    ): R {
        return project(thisArg, ...args);
    }
}
