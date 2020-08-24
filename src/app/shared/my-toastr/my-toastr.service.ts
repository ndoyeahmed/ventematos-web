import {Injectable} from '@angular/core';
import {ToastrService} from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class MyToastrService {

  constructor(
    private toastr: ToastrService
  ) {
  }

  success(msg: string = 'Opération effectuée avec succès') {
    this.toastr.success(msg, 'Succès', {timeOut: 3000});
  }

  error(msg: string = 'Echec de l\'opération') {
    this.toastr.error(msg, 'Erreur', {timeOut: 3000});
  }

  warning(msg: string) {
    this.toastr.warning(msg, 'Attention', {timeOut: 3000});
  }

  info(msg: string) {
    this.toastr.info(msg, 'Information', {timeOut: 3000});
  }
}
