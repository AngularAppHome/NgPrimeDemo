import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import { Car } from './datatabledemo.component';

@Injectable()
export class CarService {

    private headers = new Headers({'Content-Type': 'application/json'});
    constructor(private http: Http) {}
    _baseUrl:string = 'https://medappapi.herokuapp.com/patients';
    getCarsSmall() {
        return this.http.get('https://medappapi.herokuapp.com/patients')
                    .toPromise()
                    .then(res => <Car[]> res.json())
                    .then(data => { return data; });
    }

    deleteDepartment(id: string) {
        return this.http.delete('https://medappapi.herokuapp.com/patients/'+ id)
            .pipe(map((res: Response) => {
                return res;
            }));
    }

    createDepartment(car:any): Promise<Car> {
        let body = JSON.stringify(car);
        
        return this.http.post(this._baseUrl, body, {headers:this.headers})
                .toPromise()
                .then(res=>res.json().data as Car);
    }
}