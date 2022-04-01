import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ag-grid-example';

  columnDefs = [
    {headerName: "Make", field:"make"},
    {headerName: "Model", field:"model"},
    {headerName: "Price", field:"price"},
  ];
  rowData = [
    {make:'Audi', model:'A6',price:'232322'},
    {make:'BMW', model:'Q5',price:'1223432'},
    {make:'Ford', model:'eco',price:'243234'}
  ];
}
