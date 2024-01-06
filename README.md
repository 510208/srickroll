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
<script src="https://fastly.jsdelivr.net/gh/510208/srickroll@latest/srickroll.js"></script>
```


> 記得，要把JavaScript的所有引入方法，接在 `</body>` 之前

### 自行託管

如果你想靠自己來，簡單！

首先先確定你已經在網頁上正確使用了jQuerry，如果沒有請自行查詢方法。然後下載[這個檔案](https://github.com/510208/srickroll/blob/main/srickroll.js)，將它上傳到你的網站空間，這樣就可以了。你可以照著自己想要的方法修改這個軟體，記得改完要用[同樣的授權](LICENSE)再次開源喔！
