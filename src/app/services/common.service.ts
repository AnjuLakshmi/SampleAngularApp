import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { _throw } from 'rxjs/observable/throw';
import { Observable } from 'rxjs';
import { url } from '../Config/urlconfig';
import { map, tap, catchError } from 'rxjs/operators';

import { StorageService } from './storage.service';
import { Router } from '@angular/router';

@Injectable()

export class CommonService {

    httpOptions: any = {};
    public modalRef: any
    constructor(
        private http: HttpClient,
        private storageService: StorageService,
        private router: Router
        
    ) { }


  

    // Call GET Request
    callGetRequest(urlType, requestParam = "") {
        let serviceUrl = url[urlType] + requestParam;
        return this.http.get(serviceUrl)
            .pipe(
                tap((res) => {
                }),
                map((res) => {
                    return res;
                }),
                catchError((err) => {
                    this.checkResponseStatus(err);
                    
                    return _throw('Error in processing service request. Please try again later');
                })
            );
    }

  

    public checkResponseStatus(err){
        if(err.status == 403){
           
          //  this.storageService.setErrorFlg('timeout');
            this.router.navigateByUrl('login');
        }
    }

 
}

