import { AfterViewInit, Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { from, of } from 'rxjs';
import { map, switchMap, take, tap } from 'rxjs/operators';


interface DialogResult {
  requestId: string;
  data: any;
}

@Component({
  selector: 'app-aux-dialog',
  templateUrl: './aux-dialog.component.html',
  styleUrls: ['./aux-dialog.component.scss']
})
export class AuxDialogComponent implements OnInit, AfterViewInit {


  @Input() width = "800px";
  @Input() height: string;
  @Input() disableClose = false;

  @ViewChild('dialogUi') template: TemplateRef<any>;

  private dialogRef: MatDialogRef<{ path: string[], queryParams: any; }>;

  constructor(private dialog: MatDialog, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.dialogRef = this.dialog.open(this.template, {
      width: this.width,
      height: this.height,
      // We want to manage auxilary route navigation on close by back drop
      disableClose: true,
    });

    this.dialogRef.backdropClick().pipe(
      tap(() => {
        let backdropCloseEnabled = !this.disableClose;
        if (backdropCloseEnabled) {
          this.close();
        }
      })
    ).subscribe();

  }


  close(result?: any) {
    this.route.queryParamMap.pipe(
      map(params => <DialogResult>{
        requestId: params.get("requestId"),
        data: result
      }),
      switchMap(payload => {
        let isOpenByAuxRoute = !!payload.requestId;
        if (isOpenByAuxRoute) {
          return from(this.router.navigate([{ outlets: { dialog: null } }], {
            queryParams: {
              dialogResult: JSON.stringify(payload.data),
              dialogAction: payload.data ? "ok" : "cancel"
            },
            queryParamsHandling: 'merge',
            // Don't write router state history of dialog because
            // - succeeding url navigation can accidentially read the historical url states
            // - dialog can unexpectedly popup on backward nvigation and lead to circular navigation as
            // closing dialog can add a new url state
            skipLocationChange: true,
            replaceUrl: true
          }));
        }

        return of(true);
      }),
      tap(canClose => {
        if (canClose) {
          this.dialogRef.close();
        }
      }),
      take(1)
    ).subscribe();
  }
}
