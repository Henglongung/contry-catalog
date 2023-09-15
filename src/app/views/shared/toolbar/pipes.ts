import { Pipe, PipeTransform } from "@angular/core";
import { DatePipe } from '@angular/common'


@Pipe({
    name: 'getSearchArgs',
})

export class GetSaleSearchArgsPipe implements PipeTransform {

    constructor(public datepipe: DatePipe) {

    }

    transform(searchFormValue: { invoiceNo: String, agreementNo: String, creditState: String, invoiceState: String, fromDate: Date, customerId: Number }) {

        var queryTexts: String[] = [];

        if (searchFormValue.creditState) {
            queryTexts.push(searchFormValue.creditState);
        }
        if (searchFormValue.invoiceState) {
            queryTexts.push(searchFormValue.invoiceState);
        }


        if (searchFormValue.agreementNo) {
            queryTexts.push(searchFormValue.agreementNo);
        }
        if (searchFormValue.invoiceNo) {
            queryTexts.push(searchFormValue.invoiceNo);
        }

        return queryTexts;
    };
}