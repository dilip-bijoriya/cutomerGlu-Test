import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ModalService } from '../../_services';
import { ModalareaComponent } from '../modalarea/modalarea.component';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DialogComponent implements OnInit {
  @ViewChild('tref') tref: ModalareaComponent;
  constructor(private modalService: ModalService) {}
  // isShow = false;
  ngOnInit(): void {}
  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
}
