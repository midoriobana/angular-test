import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html'
})
export class FilterComponent implements OnInit {

  typeRealEstate: any
  type: any
  city: any
  district: any
  form: FormGroup

  dropdownList = []
  selectedCities: any[] = []
  selectedTypes: any[] = []
  selectedDistricts: any[] = []
  selectedTypeRealEstates: any[] = []
  dropdownSettings: IDropdownSettings = {}
  types: any[] = []
  cities: any[] = []
  districts: any[] = []
  typeRealEstates: any[] = []
  showFilter: boolean
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {

    this.typeRealEstates = [
      { id: 1, name: 'Venda' },
      { id: 2, name: 'Aluguel' },
    ]

    this.types = [
      { id: 1, name: 'Andar' },
      { id: 2, name: 'Apartamento' },
      { id: 3, name: 'Apartamento com área privativa' },
      { id: 4, name: 'Bangalô' },
      { id: 5, name: 'Barracão' },
      { id: 6, name: 'Casa' },
      { id: 7, name: 'Casa comercial' },
      { id: 8, name: 'Casa Duplex' },
      { id: 9, name: 'Casa em condomínio' },
      { id: 10, name: 'Casa geminada' },
      { id: 11, name: 'Chácara' },
      { id: 12, name: 'Cobertura' },
      { id: 13, name: 'Fazenda' },
      { id: 14, name: 'Flat' },
      { id: 15, name: 'Galpão' },
      { id: 16, name: 'Kitnet' },
      { id: 17, name: 'Loft' },
      { id: 18, name: 'Loja' },
      { id: 19, name: 'Lote' },
      { id: 20, name: 'Prédio' },
      { id: 21, name: 'Prédio Comercial' },
      { id: 22, name: 'Sala' },
      { id: 23, name: 'Sítio' },
      { id: 24, name: 'Sobrado' },
      { id: 25, name: 'Studio' },
    ] 

    this.cities = [
      { id: 1, name: 'Belo Horizonte' },
      { id: 2, name: 'Contagem' },
      { id: 3, name: 'Betim' },
      { id: 4, name: 'Santa Luzia' },
      { id: 5, name: 'Nova Lima' },
      { id: 6, name: 'Lagoa Santa' },
      { id: 7, name: 'Vespasiano' }
    ]

    this.districts = [
      { id: 1, name: 'Acaiaca' },
      { id: 2, name: 'Aparecida' },
      { id: 3, name: 'Bairro Da Graça' },
      { id: 4, name: 'Barro Preto' },
      { id: 5, name: 'Boa Vista' },
      { id: 6, name: 'Cachoeirinha' },
      { id: 7, name: 'Caiçara' },
      { id: 8, name: 'Candelária' },
      { id: 9, name: 'Castelo' },
      { id: 10, name: 'Centro' },
      { id: 11, name: 'Cidade Nova' },
      { id: 12, name: 'Concórdia' },
      { id: 13, name: 'Cond. Bougainville' },
      { id: 14, name: 'Cond. Nossa Fazenda' },
      { id: 15, name: 'Condados De Bouganville' },
      { id: 16, name: 'Copacabana' },
      { id: 17, name: 'Céu Azul' },
      { id: 18, name: 'Dom Silvério' },
      { id: 19, name: 'Dona Clara' },
      { id: 20, name: 'Engenho Nogueira' },
      { id: 21, name: 'Ermelinda' },
      { id: 22, name: 'Copacabana' },
      { id: 23, name: 'Europa' },
      { id: 24, name: 'Eymard' },
      { id: 25, name: 'Fernão Dias' },
      { id: 26, name: 'Floramar' },
      { id: 27, name: 'Fernão Dias' },
      { id: 28, name: 'Frei Leopoldo' },
      { id: 29, name: 'Funcionários' },
      { id: 30, name: 'Goiânia' },
      { id: 31, name: 'Granja Ouro Branco' },
      { id: 32, name: 'Graça' },
      { id: 33, name: 'Guarani' },
      { id: 34, name: 'Gutierrez' },
      { id: 35, name: 'Heliópolis' },
      { id: 36, name: 'Horto' },
      { id: 37, name: 'Ipiranga' },
      { id: 38, name: 'Indaiá' },
      { id: 39, name: 'Itapoã' },
      { id: 40, name: 'Jaqueline' },
      { id: 41, name: 'Jaraguá' },
      { id: 42, name: 'Jardim Alvorada' },
      { id: 43, name: 'Jardim Atlântico' },
      { id: 44, name: 'Jardim Da Glória' },
      { id: 45, name: 'Jardim Dos Comerciários' },
      { id: 46, name: 'Jardim Guanabara' },
      { id: 47, name: 'Jardim Leblon' },
      { id: 48, name: 'Jardim Petrópolis' },
      { id: 49, name: 'Jardim Vitória' },
      { id: 50, name: 'Juliana' },
      { id: 51, name: 'Letícia' },
      { id: 52, name: 'Liberdade' },
      { id: 53, name: 'Mantiqueira' },
      { id: 54, name: 'Maria Goretti' },
      { id: 55, name: 'Maria Virgínia' },
      { id: 56, name: 'Minaslândia' },
      { id: 57, name: 'Nova Cachoeirinha' },
      { id: 58, name: 'Nova Floresta' },
      { id: 59, name: 'Ouro Minas' },
      { id: 60, name: 'Ouro Preto' },
      { id: 61, name: 'Palmares' },
      { id: 62, name: 'Paraúna (Venda Nova)' },
      { id: 63, name: 'Parque Copacabana' },
      { id: 64, name: 'Piratininga (Venda Nova)' },
      { id: 65, name: 'Planalto' },
      { id: 66, name: 'Renascença' },
      { id: 67, name: 'Ribeiro De Abreu' },
      { id: 68, name: 'Rio Branco' },
      { id: 69, name: 'Sagrada Família' },
      { id: 70, name: 'Santa Amélia' },
      { id: 71, name: 'Santa Branca' },
      { id: 72, name: 'Santa Cruz' },
      { id: 73, name: 'Santa Efigênia' },
      { id: 74, name: 'Santa Inês' },
      { id: 75, name: 'Santa Mônica' },
      { id: 76, name: 'Santa Rosa' },
      { id: 77, name: 'Santa Tereza' },
      { id: 78, name: 'Santo André' },
      { id: 79, name: 'Serrano' },
      { id: 80, name: 'Serra Verde (Venda Nova)' },
      { id: 81, name: 'Silveira' },
      { id: 82, name: 'Sion' },
      { id: 83, name: 'São Cristóvão' },
      { id: 84, name: '"São Francisco"' },
      { id: 85, name: 'São Gabriel' },
      { id: 86, name: 'São José' },
      { id: 87, name: 'São João Batista' },
      { id: 88, name: 'São João Batista (Venda Nova)' },
      { id: 89, name: 'São Lucas' },
      { id: 90, name: 'São Luiz' },
      { id: 91, name: 'São Marcos' },
      { id: 92, name: 'São Paulo' },
      { id: 93, name: 'Trevo' },
      { id: 94, name: 'Tupi' },
      { id: 95, name: 'União' },
      { id: 96, name: 'Venda Nova' },
      { id: 97, name: 'Vila Cloris' },
      { id: 98, name: 'Vitória' },
    ]
  
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Selecione todas',
      unSelectAllText: 'Desmarque todas',
      itemsShowLimit: 3,
      searchPlaceholderText: 'Selecione a(s) cidade(s)',
      allowSearchFilter: this.showFilter,
      noDataAvailablePlaceholderText: 'Nenhum registro encontrado',
      noFilteredDataAvailablePlaceholderText: 'Nenhum registro encontrado',
    }

    this.form = this.fb.group({
      city: [this.selectedCities],
      type: [this.selectedTypes],
      district: [this.selectedDistricts],
      typeRealEstate: [this.selectedTypeRealEstates],
    })
  }

  toogleshowFilter() {
    this.showFilter = !this.showFilter;
    this.dropdownSettings = Object.assign({}, this.dropdownSettings, { allowSearchFilter: this.showFilter })
}

  onItemSelect(item: any) {
    console.log(item)
  }

  onSelectAll(items: any) {
    console.log(items)
  }

  clearAll() {
    this.form.get('city')?.setValue([])
    this.form.get('type')?.setValue([])
    this.form.get('district')?.setValue([])
    this.form.get('typeRealEstate')?.setValue([])
  }

}
