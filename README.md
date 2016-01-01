### Basic To Do App :heavy_check_mark:

###### Screen Shot
![yep](https://s3-us-west-2.amazonaws.com/agb539/todoss.png?X-Amz-Date=20160101T220509Z&X-Amz-Expires=300&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Signature=ac1d3a0f9544264d215e9e66fa08b2024f3f544960b4629c3db571bde2aa981c&X-Amz-Credential=ASIAIBATWL26TMSJGJWQ/20160101/us-west-2/s3/aws4_request&X-Amz-SignedHeaders=Host&x-amz-security-token=AQoDYXdzEPT//////////wEagAItd6hFih42WS/1dWreSPUwGpWZOrMQ29bCVwfyBH6vo%2B4YDxK%2BvQAHrEtQJXLCJy9OFPBxxqAO1VxtWNHY7g3bdYFKNQBiTHbpZuPn9sVLwSK36Z5NEgIkB0nXOwa656ZGzxAx4KYvq%2BUQWd8X%2BS/3T0Ox4mYSdyqk3Xj0uqme95Oh9PAMUJabTwgcMaOXyS2He8EPGKfqrox9O4AcAkL6RhLJPiHAPNNM5gx%2B76h%2BnttHy5IMSWt3BFtk9E98emD4ILjErPS1o3PMB2IaRId9iMj4h2STr1CvZ/EDE37XemPyXhF6D%2BZ%2Ba/BRun0ZmGJAbp7uvHQ7gntNsnXS/sbRILGbm7QF)

> #### What is this?

- Full-stack web application that helps you keep track of **tasks**. :books: 
- Assaign each task some **points**, depending on how difficult the task is. :star:
- Once you've completed a task, the points are added to your **score**! :tada:
- Measure your weekly velocity, in points. **How fun!** :surfer:

---

#### Built With :wrench:
```
- PostgreSQL
- Knex 
- Express
```
#### Run Locally :rocket: 
```
1. Clone and cd into repo
2. npm i
3. touch .env
4. npm nodemon
5. localhost/1337
```
---

##### Work that needs to be done to finish :nut_and_bolt: 

- [x] Create a task
- [x] Read a task
- [x] Delete a task
- [x] Update a task
- [ ] Bonus: show user how many points they have collected!

##### Warning :warning:
This app is a bit buggy! :bug:
###### Known bugs:
- [ ] When updating the status of one task, all tasks are updated.
- [ ] When selecting one task name, all delete buttons are activated when only the delete button that belongs to the task should be activated.
- [ ] Sometimes 'delete all' won't work when there is only one task item.

Contributions **more** than welcome, as always!

---

>License: MIT

>Author: Alex Bennett
