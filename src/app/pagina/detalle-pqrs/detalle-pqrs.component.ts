import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemPQRSDTO } from 'src/app/modelo/ItemPQRSDTO';
import { PqrsService } from 'src/app/servicios/pqrs.service';
@Component({
  selector: 'app-detalle-pqrs',
  templateUrl: './detalle-pqrs.component.html',
  styleUrls: ['./detalle-pqrs.component.css']
<<<<<<< HEAD
  })
  export class DetallePqrsComponent {
  codigoPqrs: string = "";
  pqrs: ItemPQRSDTO | undefined;
  constructor(private route:ActivatedRoute, private pqrsService: PqrsService) {
  this.route.params.subscribe( params => {
  this.codigoPqrs = params['codigo'];
  let pqrsConsultado = pqrsService.obtener(parseInt(this.codigoPqrs));
  if( pqrsConsultado != undefined ){
  this.pqrs = pqrsConsultado;
  }
  });
  }
  }
=======
})
export class DetallePqrsComponent {
  codigoPqrs: string = "";
  pqrs: ItemPQRSDTO | undefined;
  constructor(private route: ActivatedRoute, private pqrsService: PqrsService) {
    this.route.params.subscribe(params => {
      this.codigoPqrs = params['codigo'];
      let pqrsConsultado = pqrsService.obtener(parseInt(this.codigoPqrs));
      if (pqrsConsultado != undefined) {
        this.pqrs = pqrsConsultado;
      }
    });
  }
}
>>>>>>> 37e5211664dfb977b35674dcba07c813f7d41f91
