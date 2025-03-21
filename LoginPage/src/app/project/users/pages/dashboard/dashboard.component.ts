import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  stats = [
    { title: 'Total Revenue', value: '$45,890', icon: 'account_balance_wallet' },
    { title: 'Orders Completed', value: '320', icon: 'check_circle' },
    { title: 'New Signups', value: '85', icon: 'person_add' },
    { title: 'Support Tickets', value: '14', icon: 'support_agent' }
  ];
}
