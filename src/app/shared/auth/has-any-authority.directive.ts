import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';
import {AuthenticationService} from './authentication.service';

@Directive({
  selector: '[appHasAnyAuthority]'
})
export class HasAnyAuthorityDirective {

  private authorities: string[];

  constructor(
    private auth: AuthenticationService,
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) {
  }

  @Input()
  set appHasAnyAuthority(value: string | string[]) {
    this.authorities = typeof value === 'string' ? [value as string] : value as string[];
    this.updateView();
  }

  private updateView() {
    this.viewContainerRef.clear();
    this.auth.identity().subscribe(user => {
      if (this.auth.hasAnyAuthority(this.authorities, user)) {
        this.viewContainerRef.createEmbeddedView(this.templateRef);
      }
    });
  }
}
