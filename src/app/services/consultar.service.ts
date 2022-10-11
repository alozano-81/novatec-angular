import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap, map } from 'rxjs/operators';
import { User } from 'src/app/models/user.model';
import { Rol } from '../models/rol.models';


@Injectable({
  providedIn: 'root'
})
export class ConsultarService {

  environment = `${environment.urlApi}`;
  private path: string = '/users';
  private pathEst: string = '/estudiantes';
  usuarios: User[] = [];
  roles: Rol[] = [];

  constructor(private http: HttpClient) { }

  listarEstudiantes(): Observable<any> {
    //let url = `${this.environment}${this.path}/find/1`;
    let url = `${this.environment}${this.pathEst}/lista`;
    console.log(url);
    return this.http.get(url).pipe(
      tap((result: any) => (this.usuarios = result)),
      map((result: any) => result)
    );
  }

  listar2(): Observable<any> {
    //let url = `${this.environment}${this.path}/find/1`;
    let url = `${this.environment}${this.path}/findAll`;
    console.log(url);
    return this.http.get(url).pipe(
      tap((result: any) => (this.usuarios = result)),
      map((result: any) => result)
    );
  }

  getRoles(): Observable<Rol[]> {
    let url = `${this.environment}${this.path}/get-roles`;
    console.log(url);
    return this.http.get(url).pipe(
      tap((result: any) => (this.roles = result)),
      map((result: any) => result)
    );
  }

  //*Insertar en usuario */
  insertarUsuario(
    id: any,
    nombre: any,
    rolid: any,
    activo: any
  ) {
    let prodNombre = { id: id };
    let itemToCreate = Object.assign(prodNombre);
    let url = `${this.environment}${this.path}/crearUser/${id}/${nombre}/${rolid}/${activo}`;
    return this.http.post(url, itemToCreate);
  }
  //*Fin insertar en necesidad */

  //*actualizarUser en usuario */
  actualizarUsuario(
    id: any,
    nombre: any,
    rolid: any,
    activo: any
  ) {
    let prodNombre = { id: id };
    let itemToCreate = Object.assign(prodNombre);
    let url = `${this.environment}${this.path}/actualizarUser/${id}/${nombre}/${rolid}/${activo}`;
    return this.http.put(url, itemToCreate);
  }
  //*Fin actualizarUser en necesidad */

  //*eliminarUser en usuario */
  eliminarUsuario(
    id: any
  ) {
    let prodNombre = { id: id };
    let itemToCreate = Object.assign(prodNombre);
    let url = `${this.environment}${this.path}/deleteUser/${id}`;
    return this.http.delete(url, itemToCreate);
  }
  //*Fin eliminarUser en necesidad */

  //consultar por nombre
  consultarPorNombre(nombre:string): Observable<any> {
    let url = `${this.environment}${this.path}/consultar-por-nombre/${nombre}`;
    console.log(url);
    return this.http.get(url).pipe(
      tap((result: any) => (this.usuarios = result)),
      map((result: any) => result)
    );
  }
  // Fin consultar por nombre

}
