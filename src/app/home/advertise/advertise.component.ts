import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { CustomValidators } from 'src/app/shared/commons/CustomValidators';
import { NavRouteLinks } from 'src/app/shared/commons/NavRouteLinks';
import { DialogService } from 'src/app/shared/providers/dialog.service';
import { valueOrDefault } from './../../shared/commons/UsefulFunctions';
import { RealEstateService } from './../../shared/providers/real-estate.service';
import { StorageService as storage } from './../../shared/providers/storage.service';
import { ZipCodeService } from './../../shared/providers/zip-code.service';

@Component({
  selector: 'app-advertise',
  templateUrl: './advertise.component.html'
})
export class AdvertiseComponent implements OnInit {
  formGroup: FormGroup
  endereco: any
  proprietario: any
  realEstate: any
  id = storage.get('id')

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
    private zipCodeService: ZipCodeService,
    private realEstateService: RealEstateService,
    private dialogService: DialogService,
    private router: Router
  ) { }

  async ngOnInit() {
    if (this.id) await this.getRealEstateById(this.id)
    this.formGroup = this.fb.group({
      nome: [valueOrDefault(this.realEstate?.nome, ''), Validators.required],
      finalidade: ['', Validators.required],
      tipo: [valueOrDefault(this.realEstate?.tipo, ''), Validators.required],
      endereco: this.fb.array([]),
      valor: [valueOrDefault(this.realEstate?.valor, ''), Validators.required],
      area: [valueOrDefault(this.realEstate?.area, ''), Validators.required],
      unidade: [valueOrDefault(this.realEstate?.unidade, ''), Validators.required],
      areaPrivativa: [valueOrDefault(this.realEstate?.areaPrivativa, 0)],
      quartos: [valueOrDefault(this.realEstate?.quartos, 0)],
      suites: [valueOrDefault(this.realEstate?.suites, 0)],
      banheiros: [valueOrDefault(this.realEstate?.banheiros, 0)],
      descricao: [valueOrDefault(this.realEstate?.descricao, ''), Validators.required],
      garagem: [valueOrDefault(this.realEstate?.garagem, 0)],
      mobiliado: [valueOrDefault(this.realEstate?.mobiliado, false)],
      iptu: [valueOrDefault(this.realEstate?.iptu, 0)],
      condominio: [valueOrDefault(this.realEstate?.condominio, 0)],
      proprietario: this.fb.array([]),
      dataAnuncio: [valueOrDefault(this.realEstate?.dataAnuncio, '')]
    })
    this.endereco = this.formGroup.get('endereco') as FormArray
    this.proprietario = this.formGroup.get('proprietario') as FormArray
    this.addEndereco()
    this.addProprietario()
    this.sellOrRent()
  }

  async listZipCode(i: number) {
    const endereco = this.endereco.at(i).controls
    if (endereco.cep.value.length === 8) {
      let logradouro = endereco['rua']
      let bairro = endereco['bairro']
      let localidade = endereco['cidade']
      let uf = endereco['uf']
      const res$ = await this.zipCodeService.getZipCode(endereco.cep.value)
      logradouro?.setValue(res$.logradouro)
      bairro?.setValue(res$.bairro)
      localidade?.setValue(res$.localidade)
      uf?.setValue(res$.uf)
    }
  }

  sellOrRent() {
    if (this.id)
      this.realEstate.venda ? this.formGroup.get('finalidade')?.setValue('venda') : this.formGroup.get('finalidade')?.setValue('aluguel')
  }

  createEnderecoFormGroup(item?: any): FormGroup {
    return this.fb.group({
      rua: [valueOrDefault(item?.rua, ''), Validators.required],
      numero: [valueOrDefault(item?.numero, ''), Validators.required],
      complemento: [valueOrDefault(item?.complemento, '')],
      bairro: [valueOrDefault(item?.bairro, ''), Validators.required],
      cidade: [valueOrDefault(item?.cidade, ''), Validators.required],
      uf: [valueOrDefault(item?.uf, ''), Validators.required],
      cep: [valueOrDefault(item?.cep, ''), Validators.required]
    })
  }

  createProprietarioFormGroup(item?: any): FormGroup {
    return this.fb.group({
      nome: [valueOrDefault(item?.nome, ''), Validators.required],
      cpfCnpj: [valueOrDefault(item?.cpfCnpj, ''), Validators.required],
      email: [valueOrDefault(item?.email, ''), Validators.compose([Validators.required, CustomValidators.validadorEmail])],
      telefone: [valueOrDefault(item?.telefone, ''), Validators.required],
    })
  }

  async getRealEstateById(id: number) {
    this.realEstate = await this.realEstateService.getRealEstateById(id)
  }

  async saveRealEstate() {
    let inBody = this.formGroup.getRawValue()
    inBody.finalidade === "aluguel" ? inBody.venda = false : inBody.venda = true
    inBody.aluguel = !inBody.venda
    delete inBody.finalidade
    inBody.dataAnuncio = moment().format()
    if (this.formGroup.valid) {
      if (this.realEstate?.id) {
        await this.realEstateService.editRealEstate(this.realEstate.id, inBody)
        this.success('atualizado')
      }
      else {
        await this.realEstateService.createRealEstate(inBody)
        this.success('criado')
      }
      
    } else this.formGroup.markAllAsTouched()
  }

  addEndereco() {
    const endereco = this.createEnderecoFormGroup()
    if (this.id) {
      this.realEstate.endereco.map((item: any) => {
        this.endereco.push(this.createEnderecoFormGroup(item))
      })
    } else this.endereco.push(endereco)
  }

  addProprietario() {
    const proprietario = this.createProprietarioFormGroup()
    if (this.id) {
      this.realEstate.proprietario.map((item: any) => {
        this.proprietario.push(this.createProprietarioFormGroup(item))
      })
    } else this.proprietario.push(proprietario)
  }

  success(message: string) {
    const model = {
      title: 'Sucesso',
      msg: `Anúncio ${message} com sucesso!`,
    };
    this.dialogService.success(model).subscribe((res: any) => {
      if (res) {
        this.router.navigate([NavRouteLinks.PAGE.HOME])
      }
    })
  }

  get f() {
    return this.formGroup.controls
  }

}
