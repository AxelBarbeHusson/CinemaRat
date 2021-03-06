import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Comments } from '../../providers/comments';

@Component({
  selector: 'page-add-comment',
  templateUrl: 'add-comment.html'
})
export class AddCommentPage {

    comment: any = {
        author: 'Josh Morony',
        content: '',
        datePublished: '',
        type: 'comment',
        post: null
    };

    constructor(public navCtrl: NavController, public navParams: NavParams, public commentService: Comments) {}

    ionViewDidLoad() {

        this.comment.post = this.navParams.get('post')._id;

    }

    save(){

        // Generate computed fields
        this.comment.datePublished = new Date().toISOString();

        this.commentService.addComment(this.comment);

        this.navCtrl.pop();

    }

}
