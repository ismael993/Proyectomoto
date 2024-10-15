import { Component, inject, OnInit } from '@angular/core';
import { onLog } from 'firebase/app';
import { User } from 'src/app/models/user.model';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';
import { AddUpdateProductComponent } from 'src/app/shared/components/add-update-product/add-update-product.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  firebaseSvc = inject(FirebaseService);
  utilsSvc = inject(UtilsService);

  ngOnInit() {
  }

  user(): User{
    return this.utilsSvc.getFromLocalStorage('user');

  }
  ionViewWillEnter() {
    this.getProducts();
  }

  // ====Obtner productos====
  getProducts() {
    const user = this.utilsSvc.getFromLocalStorage('user');
    if (user && user.uid) {
        // Continua con la lógica si el objeto user y uid existen
    } else {
        console.error('Usuario no encontrado o uid es null');
    }
}


  //====Agregar o actualizar producto====
  addUpdateProduct(){
    this.utilsSvc.presentModal({
      component: AddUpdateProductComponent,
      cssClass: 'add-update-modal'
    })
    
  }

}
