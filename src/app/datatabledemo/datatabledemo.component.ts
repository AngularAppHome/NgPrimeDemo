import { Component, OnInit } from '@angular/core';
import { CarService } from './car.service';
@Component({
  selector: 'app-datatabledemo',
  templateUrl: './datatabledemo.component.html',
  styleUrls: ['./datatabledemo.component.css']
})
export class DatatabledemoComponent implements OnInit {

  displayDialog: boolean;

    car: any = {};

    selectedCar: Car;

    newCar: boolean;

    cars: Car[];

    cols: any[];

    constructor(private carService: CarService) { }

    ngOnInit() {
        this.carService.getCarsSmall().then(cars => this.cars = cars);

        this.cols = [
            { field: 'name', header: 'name' },
            { field: 'username', header: 'username' },
            { field: 'phone', header: 'phone' },
            { field: 'email', header: 'email' },
            { field: 'email', header: 'email' }
        ];
    }

    showDialogToAdd() {
        this.newCar = true;
        this.car = {};
        this.displayDialog = true;
    }

    save() {
        //let cars = [...this.cars];
       // if (this.newCar)
           // cars.push(this.car);
        //else
            //cars[this.cars.indexOf(this.selectedCar)] = this.car;

       // this.cars = cars;
       // this.car = null;
        this.displayDialog = false;
        console.log(this.car);
        this.carService.createDepartment(this.car).then(res=>console.log(res));
    }

    delete() {
        //let index = this.cars.indexOf(this.selectedCar);
       // this.cars = this.cars.filter((val, i) => i != index);
       // this.car = null;
        //this.displayDialog = false;
        debugger
        console.log(this.car._id);
        this.carService.deleteDepartment(this.car._id).subscribe(res=>console.log(res));
    }

    onRowSelect(event) {
        this.newCar = false;
        this.car = this.cloneCar(event.data);
        this.displayDialog = true;
    }

    cloneCar(c: any): any {
        let car = {};
        for (let prop in c) {
            car[prop] = c[prop];
        }
        return car;
    }

}

export interface Car {
  _id;
  name;
  username;
  email;
  password;
  phone
}
