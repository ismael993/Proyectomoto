import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ModalController, ModalOptions, ToastController, ToastOptions } from '@ionic/angular';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  loadingCtrl = inject(LoadingController);
  toastCtrl = inject(ToastController);
  modalCtrl = inject(ModalController);
  router = inject(Router)


 async takePicture (promptLabelHeader: string) {
  return await Camera.getPhoto({
    quality: 90,
    allowEditing: true,
    resultType: CameraResultType.DataUrl,
    source: CameraSource.Prompt,
    promptLabelHeader,
    promptLabelPhoto: 'Selecciona una imagen',
    promptLabelPicture: 'Toma una foto'

  });

};

  //======Loading=====

  loading(){
    return this.loadingCtrl.create({ spinner: 'crescent'})
  }




  //======Toast=======
  async presentToast(opts?: ToastOptions){
    const toast = await this.toastCtrl.create(opts);
    toast.present();
  }

  //==== Enruta a cualquier Pagina disponible=====
  routerLink(url: string){
    return this.router.navigateByUrl(url);
  }

  //==== Guarda un elemento en LocalStorage=====
  saveInLocalStorage(key: string, value: any){
    return localStorage.setItem(key, JSON.stringify(value))
  }
  //===== Obtiene un elemento desde el LocalStorage====
  getFromLocalStorage(key: string): any{
    const item = localStorage.getItem(key);
    if(item){
      try{
        return JSON.parse(item);
      }catch(error){
        console.error('Error parsing JSON:', error);
        return null; // Si hay un error al parsear, devuelve null
      }
    }else{
      console.warn(`La clave "${key}"no existe en localStorage`);
      return null; // si la clave no existe, devuelve null
  }
  }

  //====== Model =====
  async presentModal(opts: ModalOptions) {
    const modal = await this.modalCtrl.create(opts);
    await modal.present();
    const { data } = await modal.onWillDismiss();
    if(data) return data;
  }

  dismissModal(data?: any){
    return this.modalCtrl.dismiss(data);
  }

}
