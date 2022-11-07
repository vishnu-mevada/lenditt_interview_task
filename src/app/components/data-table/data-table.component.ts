import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SOURCE_DATA } from 'src/app/shared/static-data/table-data';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DatePipe } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'data-table',
    templateUrl: './data-table.component.html',
    styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
    displayedColumns: string[] = ['position', 'name', 'type', 'creation_date'];
    dataSource = new MatTableDataSource(SOURCE_DATA);
    pipe: DatePipe;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;


    filterDateForm = new FormGroup({
        fromDate: new FormControl(),
        toDate: new FormControl(),
    });

    get fromDate() { return this.filterDateForm.get('fromDate')?.value; }
    get toDate() { return this.filterDateForm.get('toDate')?.value; }

    constructor() {
        this.pipe = new DatePipe('en');
    }

    ngOnInit(): void { }

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }

    applyDateFilter() {
        this.dataSource.filterPredicate = (data, filter) => {
            if (this.fromDate && this.toDate) {
                return data.creation_date >= this.fromDate && data.creation_date <= this.toDate;
            }
            return true;
        }

        this.dataSource.filter = '' + Math.random();
    }


}
