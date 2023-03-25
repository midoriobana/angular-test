import { ZipCodeService } from '../../shared/providers/zip-code.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-advertise',
  templateUrl: './advertise.component.html'
})
export class AdvertiseComponent implements OnInit {
  formGroup: FormGroup
  adress: any
  categoryList: any = [
    'Andar',
    'Apartamento',
    'Apartamento com área privativa',
    'Bangalô',
    'Barracão',
    'Casa',
    'Casa comercial',
    'Casa Duplex',
    'Casa em condomínio',
    'Casa geminada',
    'Chácara',
    'Cobertura',
    'Fazenda',
    'Flat',
    'Galpão',
    'Kitnet',
    'Loft',
    'Loja',
    'Lote',
    'Prédio',
    'Prédio Comercial',
    'Sala',
    'Sítio',
    'Sobrado',
    'Studio'
  ]

  statesList: any = [
    { "nome": "Acre", "sigla": "AC" },
    { "nome": "Alagoas", "sigla": "AL" },
    { "nome": "Amapá", "sigla": "AP" },
    { "nome": "Amazonas", "sigla": "AM" },
    { "nome": "Bahia", "sigla": "BA" },
    { "nome": "Ceará", "sigla": "CE" },
    { "nome": "Distrito Federal", "sigla": "DF" },
    { "nome": "Espírito Santo", "sigla": "ES" },
    { "nome": "Goiás", "sigla": "GO" },
    { "nome": "Maranhão", "sigla": "MA" },
    { "nome": "Mato Grosso", "sigla": "MT" },
    { "nome": "Mato Grosso do Sul", "sigla": "MS" },
    { "nome": "Minas Gerais", "sigla": "MG" },
    { "nome": "Pará", "sigla": "PA" },
    { "nome": "Paraíba", "sigla": "PB" },
    { "nome": "Paraná", "sigla": "PR" },
    { "nome": "Pernambuco", "sigla": "PE" },
    { "nome": "Piauí", "sigla": "PI" },
    { "nome": "Rio de Janeiro", "sigla": "RJ" },
    { "nome": "Rio Grande do Norte", "sigla": "RN" },
    { "nome": "Rio Grande do Sul", "sigla": "RS" },
    { "nome": "Rondônia", "sigla": "RO" },
    { "nome": "Roraima", "sigla": "RR" },
    { "nome": "Santa Catarina", "sigla": "SC" },
    { "nome": "São Paulo", "sigla": "SP" },
    { "nome": "Sergipe", "sigla": "SE" },
    { "nome": "Tocantins", "sigla": "TO" }

  ]

  constructor(
    private zipCodeService: ZipCodeService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.formGroup = this.fb.group({
      
    })
  }

  async listZipCode() {
    await this.zipCodeService.getZipCode('31150260')
  }

}
