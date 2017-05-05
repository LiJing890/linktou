<template>
  <div class="hello">
    <h2>上传文件：</h2>
    <form action=""  method="post" enctype=”multipart/form-data” @submit.prevent="submit">
      <a href="javascript:;" class="file">选择文件
          <input type="file" name="" id="fileupload" v-on:change="change">
      </a>
      <span>{{ filename }}</span>
      <br><br>
      <button type="submit"> 上传 </button>
    </form>
    <h2>上传文件下载列表：</h2>
    <ul>
      <li>
        <a v-bind:href="loadurl" v-text="newfilename"></a>
      </li>
    </ul>
  </div>


</template>

<script>
var collection;
export default {
  name: 'fileupload',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      filename:'',
      newfilename:'default',
      loadurl:'http://172.19.82.228:9881/fileManage//FileManage/fileUploadByFile'
    }
  },
  methods: {
        submit: function(event) {
          var file = $("#fileupload").val();
          var fileName = getFileName(file);
          var fileType = getFileType(file);
          var  params={ 
              fileName:fileName,
              fileType:fileType,
              collection:collection
            }
            
          this.$http.post(this.loadurl,params
            
          ).then((response) => {
            	console.log(response)
				})
				.catch(function(response) {
					console.log(response)
				})
    
        },
        change:function(event){
          collection = event.target.files;
          collection = collection.toString(2);
          this.filename = $("#fileupload").val();
        }
    }
}

        function getFileName(o){
              var pos=o.lastIndexOf("\\");
              return o.substring(pos+1);  
          }
          function getFileType(o){
              var pos=o.lastIndexOf(".");
              var type =o.substring(pos+1);
             if(type =='jpg' || type=='png' || type=='gif' || type =='jepg'){
                return 1;
             } else{
               return 2;
             }
               
          }


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.file {
    position: relative;
    display: inline-block;
    background: #D0EEFF;
    border: 1px solid #99D3F5;
    border-radius: 4px;
    padding: 4px 12px;
    overflow: hidden;
    color: #1E88C7;
    text-decoration: none;
    text-indent: 0;
    line-height: 20px;
}
.file input {
    position: absolute;
    font-size: 100px;
    right: 0;
    top: 0;
    opacity: 0;
}
.file:hover {
    background: #AADFFD;
    border-color: #78C3F3;
    color: #004974;
    text-decoration: none;
}
</style>
