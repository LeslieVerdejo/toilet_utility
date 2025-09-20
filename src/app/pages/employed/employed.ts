import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { Navbar } from '../../components/navbar/navbar';
import { Sidebar } from '../../components/sidebar/sidebar';

@Component({
  selector: 'app-employed',
  standalone: true,
  imports: [CommonModule, FormsModule, NgxPaginationModule, Navbar, Sidebar],
  templateUrl: './employed.html',
  styleUrl: './employed.css',
})
export class Employed {
  termino: string = '';
  page = 1;

  get empleadosFiltrados() {
    if (!this.termino) return this.empleados;
    return this.empleados.filter(
      (e) =>
        e.nombres.toLowerCase().includes(this.termino.toLowerCase()) ||
        e.apellidos.toLowerCase().includes(this.termino.toLowerCase()) ||
        e.cargo.toLowerCase().includes(this.termino.toLowerCase()) ||
        e.rut.includes(this.termino),
    );
  }

  buscar(termino: string) {
    this.termino = termino;
    this.page = 1;
  }

  // Datos locales para pruebas (mock).
  // Luego se conectará al backend (front Leslie)
  empleados = [
    {
      id: 2,
      rut: '203948392',
      nombres: 'Ana María',
      apellidos: 'López Torres',
      cargo: 'Secretaria',
      telefono: '912345678',
    },
    {
      id: 3,
      rut: '187362819',
      nombres: 'Carlos',
      apellidos: 'Pérez Soto',
      cargo: 'Bodeguero',
      telefono: '987654321',
    },
    {
      id: 4,
      rut: '145672839',
      nombres: 'María José',
      apellidos: 'Rivas González',
      cargo: 'Administrativa',
      telefono: '956738291',
    },
    {
      id: 5,
      rut: '209384756',
      nombres: 'Felipe Andrés',
      apellidos: 'Muñoz Contreras',
      cargo: 'Chofer',
      telefono: '934827364',
    },
    {
      id: 6,
      rut: '176543892',
      nombres: 'Camila',
      apellidos: 'Silva Herrera',
      cargo: 'Contadora',
      telefono: '987654390',
    },
    {
      id: 7,
      rut: '183927465',
      nombres: 'Diego',
      apellidos: 'Fernández Ramírez',
      cargo: 'Operador',
      telefono: '934829102',
    },
    {
      id: 8,
      rut: '194837261',
      nombres: 'Valentina',
      apellidos: 'Castillo Reyes',
      cargo: 'Supervisora',
      telefono: '976543210',
    },
    {
      id: 9,
      rut: '163829475',
      nombres: 'Sebastián',
      apellidos: 'Gómez Vásquez',
      cargo: 'Analista',
      telefono: '945678123',
    },
    {
      id: 10,
      rut: '182736495',
      nombres: 'Francisca',
      apellidos: 'Morales Díaz',
      cargo: 'Asistente',
      telefono: '934567890',
    },
  ];
}
