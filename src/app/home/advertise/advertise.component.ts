import { RealEstateService } from './../../shared/providers/real-estate.service';
import { ZipCodeService } from '../../shared/providers/zip-code.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-advertise',
  templateUrl: './advertise.component.html'
})
export class AdvertiseComponent implements OnInit {
  adress: any
  formGroup: FormGroup
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
    "AC",
    "AL",
    "AP",
    "AM",
    "BA",
    "CE",
    "DF",
    "ES",
    "GO",
    "MA",
    "MT",
    "MS",
    "MG",
    "PA",
    "PB",
    "PR",
    "PE",
    "PI",
    "RJ",
    "RN",
    "RS",
    "RO",
    "RR",
    "SC",
    "SP",
    "SE",
    "TO"

  ]

  constructor(
    private fb: FormBuilder,
    private realEstateService: RealEstateService,
    private zipCodeService: ZipCodeService,
  ) { }

  ngOnInit() {
    this.formGroup = this.fb.group({
      nome: ['', [Validators.required]],
      finalidade: ['', [Validators.required]],
      tipo: ['', [Validators.required]],
      endereco: this.fb.group({
        cep: ['', [Validators.required]],
        rua: ['', [Validators.required]],
        numero: ['', [Validators.required]],
        complemento: [''],
        bairro: ['', [Validators.required]],
        cidade: ['', [Validators.required]],
        uf: ['', [Validators.required]]
      }),
      valor: ['', [Validators.required]],
      area: ['', [Validators.required]],
      unidade: ['', [Validators.required]],
      areaPrivativa: [''],
      quartos: [''],
      suites: [''],
      banheiros: [''],
      garagem: [''],
      mobiliado: [false],
      iptu: [''],
      condominio: [''],
      nomeRazaoSocial: ['', [Validators.required]],
      telefone: ['', [Validators.required]],
      cpfCnpj: ['', [Validators.required]],
      email: ['', [Validators.required]],
      dataAnuncio: ['']
    })
  }

  async listZipCode() {
    const cep = this.formGroup.value.endereco['cep']
    let logradouro = this.formGroup.get('endereco.rua')
    let bairro = this.formGroup.get('endereco.bairro')
    let localidade = this.formGroup.get('endereco.cidade')
    let uf = this.formGroup.get('endereco.uf')
    const res$ = await this.zipCodeService.getZipCode(cep)
    logradouro?.setValue(res$.logradouro)
    bairro?.setValue(res$.bairro)
    localidade?.setValue(res$.localidade)
    uf?.setValue(res$.uf)
  }

  async submit() {
    let inBody = this.formGroup.getRawValue()
    let array = []
    inBody.finalidade === "aluguel" ? inBody.venda = false : inBody.venda = true
    inBody.aluguel = !inBody.venda
    array.push(inBody.endereco)
    inBody.endereco = array
    delete inBody.finalidade 
    inBody.dataAnuncio = moment().format()
    if (this.formGroup.valid) {
      await this.realEstateService.createRealEstate(inBody)
    } else this.formGroup.markAllAsTouched()
  }

}
