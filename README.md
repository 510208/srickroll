# sRickroll
訪客只要到了你的網站，就會直接被瑞克搖！

## 如何使用

### 直接引入

使用很簡單，這個東西採用了jQuerry作為函式庫，請直接在HTML裡準備好引入jQuerry。

如果你不會，用這個方法試試看：

```html
<script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
```

完美！下一步，請你引入sRickroll的JS檔，這個檔案我沒有壓縮，當然我想這個這麼小的功能也不太需要壓縮...

直接引入原始檔案，這樣：

```html
<script src="https://fastly.jsdelivr.net/gh/510208/srickroll@main/srickroll.js"></script>
```

這樣還不會工作，因此請在你的網頁裡面建立一個元素(以下列出可以用的元素)，並為它加上一行 `class="rickroll"` 即可

這些是可以用來搖人的物件：
- h1~h6
- p
- a(超連結文字)
- textarea
- button、input等表單控制元素
- div
- 你想的到的其他東西...

像這樣：

```html
<h1 class="rickroll display-1">h1 Rickroll</h1>
<h2 class="rickroll display-2">h2 Rickroll</h2>
<h3 class="rickroll display-3">h3 Rickroll</h3>
<h4 class="rickroll display-4">h4 Rickroll</h4>
<h5 class="rickroll">h5 Rickroll</h5>
<h6 class="rickroll">h6 Rickroll</h6>
<p class="rickroll lead">p Rickroll</p>
<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" class="rickroll btn btn-primary">a Rickroll</a>
<input type="button" value="input Rickroll" class="rickroll btn btn-primary"></input>
<button class="rickroll btn btn-primary">button Rickroll</button>
<p>  </p>
<div class="rickroll alert alert-primary" role="alert">
    div Rickroll
</div>
<p>  </p>
<span class="rickroll badge badge-primary">span Rickroll</span>
<br>
<p>  </p>
<div class="rickroll card" style="width: 18rem;">
    <img src="https://i.imgur.com/6XZQq2F.jpg" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">card Rickroll</h5>
        <p class="card-text">card Rickroll</p>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" class="rickroll btn btn-primary">a Rickroll</a>
    </div>
</div>
<p>  </p>
<textarea class="rickroll form-control" id="exampleFormControlTextarea1" rows="3">textarea Rickroll</textarea>
```

> 記得，要把JavaScript的所有引入方法，接在 `</body>` 之前

### 自行託管

如果你想靠自己來，簡單！

首先先確定你已經在網頁上正確使用了jQuerry，如果沒有請自行查詢方法。然後下載[這個檔案](https://github.com/510208/srickroll/blob/main/srickroll.js)，將它上傳到你的網站空間，這樣就可以了。你可以照著自己想要的方法修改這個軟體，記得改完要用[同樣的授權](LICENSE)再次開源喔！
