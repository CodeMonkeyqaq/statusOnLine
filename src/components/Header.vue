<template>
    <Menu mode="horizontal" theme="dark" active-name="1" class="nav">
        <MenuItem style="padding-top:10px; height:40px;"><img src="../assets/logo.png" height="40" style="margin-left:50px;"/></MenuItem>
        <MenuItem name="1" to="Home" class="nav-first">
            <Icon type="ios-home" />
            首页
        </MenuItem>
        <MenuItem name="2" to="StatusList" class="nav-first">
            <Icon type="ios-paper" />
            古董列表
        </MenuItem>
        <Submenu name="3" class="nav-first">
            <template slot="title">
                <Icon type="ios-stats" />
                古董猜猜猜
            </template>
            <MenuGroup title="测试">
                <MenuItem name="3-1" to="Year">猜朝代</MenuItem>
                <MenuItem name="3-2" to="True">猜真假</MenuItem>
            </MenuGroup>
        </Submenu>
    </Menu>
</template>
<style scoped>
    .nav{
        background-color: rgb(29, 28, 26);
    }
    .nav-first{
        margin-left: 8%;
    }
</style>
<script>
export default {
    name:"Header"
}
</script>