import {resolve} from "@angular/compiler-cli";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatTableDataSource} from "@angular/material/table";
import {PageData} from "../../../../shared/model/page-data";
import {User} from "../../../../shared/model/user.model";
import {UserService} from "../../../../shared/service/user.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, AfterViewInit  {

  constructor(
    private userService: UserService,
    private snackBar: MatSnackBar
  ) {
  }

  userPage: PageData<User>
  displayedColumns: string[] = ['id', 'avatar', 'first_name', 'last_name', 'email'];
  dataSource: MatTableDataSource<User>
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.dataSource = new MatTableDataSource<User>([])
    this.getUserList()
  }

  getUserList(size: number = 10, page: number = 0) {
    this.userService.getListUser(size, page + 1).then((result) => {
      this.userPage = result
      if (this.userPage.data) {
        this.dataSource.data = this.userPage.data
      }
    })
      .catch(error => {
        this.snackBar.open(error, 'Close', {duration: 4000})
      })
  }

  changePage($event: PageEvent) {
    console.log($event)
    this.getUserList($event.pageSize, $event.pageIndex)
  }
}
