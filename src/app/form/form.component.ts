import { Component, OnInit } from '@angular/core';
import { Resultado } from '../class/resultado';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  private isFormFull : Boolean;
  private sueldo : number;
  private irpf : number;
  private pagas : number;

  /* Variables resultado */
  private resultado : Resultado = new Resultado();

  constructor() { 
    this.isFormFull = false;

   }
  
  

  
  onChange(changes) {

    if (typeof this.sueldo != 'undefined' && 
        typeof this.irpf != 'undefined' && 
        typeof this.pagas != 'undefined') 
        {
              this.calcularSueldo();
              this.isFormFull = true;
        }
  }

  ngOnInit() {
  }

  calcularSueldo () {
		let _sueldo : number = this.sueldo;
		let _irpf : number = this.irpf;
    let _pagas : number = this.pagas;

		var anual = _sueldo / _pagas;
		var base_cotizacion = anual + (anual*2 ) /12;
			
		//Impuestos naturales
		var contingencias = (base_cotizacion*4.7/100);
		var desempleo = (base_cotizacion*1.55/100);
		var fp = (base_cotizacion*0.1/100);
			
		var total_naturales = contingencias + desempleo + fp ;
			
		//Impuestos variables ( Irpf )
		var impuesto_irpf = ( anual * _irpf ) / 100 ;
			
		var total_impuestos = impuesto_irpf + total_naturales;
		var sueldo_final = anual - total_impuestos;
			
		//Paga extra
		var extra = anual - (anual * _irpf ) / 100;
		var mes_extra = (anual * _pagas ) / 12;

    this.resultado.Contingencias = contingencias;
		this.resultado.Desempleo = desempleo;
		this.resultado.Fp = fp;
		this.resultado.total_naturales = total_naturales;
		this.resultado.impuesto_irpf = impuesto_irpf;
		this.resultado.total_impuestos = total_impuestos;
		this.resultado.sueldo_final = sueldo_final;
		this.resultado.anual = anual;
		this.resultado.extra = extra;
		this.resultado.mes_extra = mes_extra;
  }



}
