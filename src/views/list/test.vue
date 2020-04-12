<template>
    <div>
         <el-select class='selectpicker search-fields' name='all-status'>
                  <el-option>All Status</el-option>
                  <el-option>For Sale</el-option>
                  <el-option>For Rent</el-option>
                </el-select>
                <el-select class='selectpicker search-fields' name='all-type'>
                  <el-option>All Type</el-option>
                  <el-option>Apartments</el-option>
                  <el-option>Shop</el-option>
                  <el-option>Restaurant</el-option>
                  <el-option>Villa</el-option>
                </el-select>
                <el-select class='selectpicker search-fields' name='commercial'>
                  <el-option>Commercial</el-option>
                  <el-option>Residential</el-option>
                  <el-option>Commercial</el-option>
                  <el-option>Land</el-option>
                </el-select>            
                <el-select class='selectpicker search-fields' name='location'>
                  <el-option>location</el-option>
                  <el-option>United States</el-option>
                  <el-option>American Samoa</el-option>
                  <el-option>Belgium</el-option>
                  <el-option>Canada</el-option>
                </el-select>
    </div>
</template>