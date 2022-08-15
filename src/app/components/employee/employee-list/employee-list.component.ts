import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Person } from 'src/models/person';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  isVisible = false;
  data: Person[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    }

  ];
  showDeleteConfirm(): void {
    this.modal.confirm({
      nzTitle: 'Bạn có muốn xóa không',
      nzOkText: 'Có',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => this.message.success('xóa thành công!'),
      nzCancelText: 'Hủy',
      nzOnCancel: () => this.message.info('hủy thành công!')
    });
  }


  constructor(
    private message: NzMessageService,
    private modal: NzModalService
  ) { }

  ngOnInit(): void {
  }

}
