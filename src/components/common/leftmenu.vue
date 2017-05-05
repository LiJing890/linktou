 <style>
 .sidebar {
  display: block;
  float: left;
  width: 250px;
  background: #333;
}
.content {
  display: block;
  overflow: hidden;
  width: auto;
}

.sidebar-nav {
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  background-image: -webkit-linear-gradient(left, color-stop(#333333 10px), color-stop(#222222 10px));
  background-image: linear-gradient(to right, #333333 10px, #222222 10px);
  background-repeat: repeat-x;
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff333333', endColorstr='#ff222222', GradientType=1);
}
.sidebar-nav ul {
  padding: 0;
  margin: 0;
  list-style: none;
}
.sidebar-nav a,
.sidebar-nav a:hover,
.sidebar-nav a:focus,
.sidebar-nav a:active {
  outline: none;
}
.sidebar-nav ul li,
.sidebar-nav ul a {
  display: block;
}
.sidebar-nav ul a {
  padding: 10px 20px;
  color: #aaa;
  border-top: 1px solid rgba(0, 0, 0, 0.3);
  box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.05) inset;
  text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.5);
}
.sidebar-nav ul a:hover,
.sidebar-nav ul a:focus,
.sidebar-nav ul a:active {
  color: #fff;
  text-decoration: none;
}
.sidebar-nav ul ul a {
  padding: 10px 30px;
  background-color: rgba(255, 255, 255, 0.1);
}
.sidebar-nav ul ul a:hover,
.sidebar-nav ul ul a:focus,
.sidebar-nav ul ul a:active {
  background-color: rgba(255, 255, 255, 0.2);
}
.sidebar-nav-item {
  padding-left: 5px;
}
.sidebar-nav-item-icon {
  padding-right: 5px;
}

 </style>
 <template>
 <div class="sucaihuo-container">
            <div class="sucaihuo-content bgcolor-8">
                <div class="clearfix">
                    <aside class="sidebar">
                        <nav class="sidebar-nav">
                            <ul id="menu">
                                <li class="active">
                                    <a href="#">
                                        <span class="sidebar-nav-item-icon fa fa-github fa-lg"></span>
                                        <span class="sidebar-nav-item">metisMenu</span>
                                        <span class="fa arrow"></span>
                                    </a>
                                    <ul>
                                        <li>
                                            <a href="" target="_blank">
                                                <span class="sidebar-nav-item-icon fa fa-code-fork"></span>
                                                Fork
                                            </a>
                                        </li>
                                        <li>
                                            <a href="" target="_blank">
                                                <span class="sidebar-nav-item-icon fa fa-star"></span>
                                                Star
                                            </a>
                                        </li>
                                        <li>
                                            <a href="" target="_blank">
                                                <span class="sidebar-nav-item-icon fa fa-exclamation-triangle"></span>
                                                Issues
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">Menu 0 <span class="fa arrow"></span></a>
                                    <ul>
                                        <li><a href="#">item 0.1</a></li>
                                        <li><a href="#">item 0.2</a></li>
                                        <li><a href="" target="_blank">onokumus</a></li>
                                        <li><a href="#">item 0.4</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">Menu 1 <span class="glyphicon arrow"></span></a>
                                    <ul>
                                        <li><a href="#">item 1.1</a></li>
                                        <li><a href="#">item 1.2</a></li>
                                        <li>
                                            <a href="#">Menu 1.3 <span class="fa plus-times"></span></a>
                                            <ul>
                                                <li><a href="#">item 1.3.1</a></li>
                                                <li><a href="#">item 1.3.2</a></li>
                                                <li><a href="#">item 1.3.3</a></li>
                                                <li><a href="#">item 1.3.4</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="#">item 1.4</a></li>
                                        <li>
                                            <a href="#">Menu 1.5 <span class="fa plus-minus"></span></a>
                                            <ul>
                                                <li><a href="#">item 1.5.1</a></li>
                                                <li><a href="#">item 1.5.2</a></li>
                                                <li><a href="#">item 1.5.3</a></li>
                                                <li><a href="#">item 1.5.4</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">Menu 2 <span class="glyphicon arrow"></span></a>
                                    <ul>
                                        <li><a href="#">item 2.1</a></li>
                                        <li><a href="#">item 2.2</a></li>
                                        <li><a href="#">item 2.3</a></li>
                                        <li><a href="#">item 2.4</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </aside>
                    </div>
                    </div>
                    </div>
</template>

<script>
export default {
  name: 'leftmenu',
  data () {
    return {
    }
  },
  methods: {
    
    }
}

   $(function () {
        $('#menu').metisMenu();
    });
</script>
