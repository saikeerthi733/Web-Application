import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostsService } from '../posts.service';


@Component({
  selector: 'app-posts-create',
  templateUrl: './posts-create.component.html',
  styleUrls: ['./posts-create.component.css']
})
export class PostCreateComponent {
  enteredTitle = '';
  enteredContent = '';

constructor(public postsService: PostsService) {}


onAddPost(form: NgForm) {
  if (form.invalid) {
  return;
  }
  this.postsService.addPost(form.value.title, form.value.content);
  form.resetForm();
}

}
