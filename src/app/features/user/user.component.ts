import {MediaMatcher} from "@angular/cdk/layout";
import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";
import {NavItem} from "../../shared/model/nav-item";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @ViewChild('snav') snav : MatSidenav

  menu: NavItem [] = [
    {
      displayName: 'User',
      iconName: 'account_circle',
      children: [
        {
          displayName: 'Manage',
          iconName: 'table_chart',
          route: '/user/list',
        },
        {
          displayName: 'Add',
          iconName: 'add_circle',
          route: '/user/add'
        },
      ]
    },

  ];
  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;
  sideNavOpen: boolean = false;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
  }


}
