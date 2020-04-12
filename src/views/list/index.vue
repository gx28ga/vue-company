<template>
  <div class="properties-section content-area">
    <div class="container">
      <el-row>
        <el-col :span="16">
          <!-- Option bar start -->
                <div class="option-bar d-none d-xl-block d-lg-block d-md-block d-sm-block">
                    <el-row>
                      <el-col :span="12">
                        <div class="sorting-options2">
                                <span class="sort">Sort by:</span>
                                <select class="selectpicker search-fields" name="default-order">
                                    <option>Default Order</option>
                                    <option>Price High to Low</option>
                                    <option>Price: Low to High</option>
                                    <option>Newest Properties</option>
                                    <option>Oldest Properties</option>
                                </select>
                            </div>
                      </el-col>
                      <el-col :span="12">
                        <div class="sorting-options">
                                <a href="properties-list-rightside.html" class="change-view-btn active-view-btn"><i class="el-icon-s-unfold"></i></a>
                                <a href="properties-grid-rightside.html" class="change-view-btn"><i class="el-icon-menu"></i></a>
                            </div>
                      </el-col>
                    </el-row>
                </div>
                <!-- Property box 2 start -->
                <div class="property-box-2" >
                  <el-row>
                      <el-col :span="10">
                         <div class="property-thumbnail">
                                <a href="properties-details.html" class="property-img">
                                    <img src="../../assets/properties-list-1.jpg" alt="properties" class="img-fluid">
                                    <div class="listing-badges">
                                        <span class="featured">Featured</span>
                                    </div>
                                    <div class="price-box"><span>$850.00</span> Per month</div>
                                </a>
                            </div>
                      </el-col>
                      <el-col :span="14">
                        <div class="detail">
                                <div class="hdg">
                                    <h3 class="title">
                                        <a href="properties-details.html">Relaxing Apartment</a>
                                    </h3>
                                    <h5 class="location">
                                        <a href="properties-details.html">
                                            <i class="el-icon-location-information"></i>20-21 Kathal St. Tampa City, FL
                                        </a>
                                    </h5>
                                </div>
                                <ul class="facilities-list clearfix">
                                    <li>
                                        <span>Area</span>3600 Sqft
                                    </li>
                                    <li>
                                        <span>Beds</span> 3
                                    </li>
                                    <li>
                                        <span>Baths</span> 2
                                    </li>
                                    <li>
                                        <span>Garage</span> 1
                                    </li>
                                </ul>
                                <div class="footer">
                                    <a href="#" tabindex="0">
                                        <i class="el-icon-user-solid"></i> Jhon Doe
                                    </a>
                                    <span>
                                          <i class="el-icon-date"></i>5 Days ago
                                    </span>
                                </div>
                            </div>
                      </el-col>
                    </el-row>
                </div>
                <div class="property-box-2" >
                    <el-row>
                      <el-col :span="10">
                        <div class="property-thumbnail">
                                <a href="properties-details.html" class="property-img">
                                    <img src="../../assets/properties-list-2.jpg" alt="properties" class="img-fluid">
                                    <div class="listing-badges">
                                        <span class="featured">Featured</span>
                                    </div>
                                    <div class="price-box"><span>$850.00</span> Per month</div>
                                </a>
                            </div>
                      </el-col>
                      <el-col :span="14">
                        <div class="detail">
                                <div class="hdg">
                                    <h3 class="title">
                                        <a href="properties-details.html">Park avenue</a>
                                    </h3>
                                    <h5 class="location">
                                        <a href="properties-details.html">
                                            <i class="el-icon-location-information"></i>20-21 Kathal St. Tampa City, FL
                                        </a>
                                    </h5>
                                </div>
                                <ul class="facilities-list clearfix">
                                    <li>
                                        <span>Area</span>3600 Sqft
                                    </li>
                                    <li>
                                        <span>Beds</span> 3
                                    </li>
                                    <li>
                                        <span>Baths</span> 2
                                    </li>
                                    <li>
                                        <span>Garage</span> 1
                                    </li>
                                </ul>
                                <div class="footer">
                                    <a href="#" tabindex="0">
                                        <i class="el-icon-user-solid"></i> Jhon Doe
                                    </a>
                                    <span>
                                          <i class="el-icon-date"></i>5 Days ago
                                    </span>
                                </div>
                            </div>
                      </el-col>
                    </el-row>
                </div>
                <div class="property-box-2" >
                  <el-row>
                      <el-col :span="12">
                        <div class="property-thumbnail">
                              <a href="properties-details.html" class="property-img">
                                  <img src="../../assets/properties-list-3.jpg" alt="properties" class="img-fluid">
                                  <div class="listing-badges">
                                      <span class="featured">Featured</span>
                                  </div>
                                  <div class="price-box"><span>$850.00</span> Per month</div>
                              </a>
                          </div>
                      </el-col>
                      <el-col :span="12">
                        <div class="detail">
                                <div class="hdg">
                                    <h3 class="title">
                                        <a href="properties-details.html">Modern Family Home</a>
                                    </h3>
                                    <h5 class="location">
                                        <a href="properties-details.html">
                                            <i class="el-icon-location-information"></i>20-21 Kathal St. Tampa City, FL
                                        </a>
                                    </h5>
                                </div>
                                <ul class="facilities-list clearfix">
                                    <li>
                                        <span>Area</span>3600 Sqft
                                    </li>
                                    <li>
                                        <span>Beds</span> 3
                                    </li>
                                    <li>
                                        <span>Baths</span> 2
                                    </li>
                                    <li>
                                        <span>Garage</span> 1
                                    </li>
                                </ul>
                                <div class="footer">
                                    <a href="#" tabindex="0">
                                        <i class="el-icon-user-solid"></i> Jhon Doe
                                    </a>
                                    <span>
                                          <i class="el-icon-date"></i>5 Days ago
                                    </span>
                                </div>
                            </div>
                      </el-col>
                    </el-row>
                </div>
                <div class="property-box-2" >
                  <el-row>
                      <el-col :span="10">
                        <div class="property-thumbnail">
                                <a href="properties-details.html" class="property-img">
                                    <img src="../../assets/properties-list-4.jpg" alt="properties" class="img-fluid">
                                    <div class="listing-badges">
                                        <span class="featured">Featured</span>
                                    </div>
                                    <div class="price-box"><span>$850.00</span> Per month</div>
                                </a>
                            </div>
                      </el-col>
                      <el-col :span="14">
                        <div class="detail">
                                <div class="hdg">
                                    <h3 class="title">
                                        <a href="properties-details.html">Relaxing Apartment</a>
                                    </h3>
                                    <h5 class="location">
                                        <a href="properties-details.html">
                                            <i class="el-icon-location-information"></i>20-21 Kathal St. Tampa City, FL
                                        </a>
                                    </h5>
                                </div>
                                <ul class="facilities-list clearfix">
                                    <li>
                                        <span>Area</span>3600 Sqft
                                    </li>
                                    <li>
                                        <span>Beds</span> 3
                                    </li>
                                    <li>
                                        <span>Baths</span> 2
                                    </li>
                                    <li>
                                        <span>Garage</span> 1
                                    </li>
                                </ul>
                                <div class="footer">
                                    <a href="#" tabindex="0">
                                        <i class="el-icon-user-solid"></i> Jhon Doe
                                    </a>
                                    <span>
                                          <i class="el-icon-date"></i>5 Days ago
                                    </span>
                                </div>
                            </div>
                      </el-col>
                    </el-row>
                </div>
                <div class="property-box-2" >
                  <el-row>
                      <el-col :span="10">
                         <div class="property-thumbnail">
                                <a href="properties-details.html" class="property-img">
                                    <img src="../../assets/properties-list-5.jpg" alt="properties" class="img-fluid">
                                    <div class="listing-badges">
                                        <span class="featured">Featured</span>
                                    </div>
                                    <div class="price-box"><span>$850.00</span> Per month</div>
                                </a>
                            </div>
                      </el-col>
                      <el-col :span="14">
                         <div class="detail">
                                <div class="hdg">
                                    <h3 class="title">
                                        <a href="properties-details.html">Park avenue</a>
                                    </h3>
                                    <h5 class="location">
                                        <a href="properties-details.html">
                                            <i class="el-icon-location-information"></i>20-21 Kathal St. Tampa City, FL
                                        </a>
                                    </h5>
                                </div>
                                <ul class="facilities-list clearfix">
                                    <li>
                                        <span>Area</span>3600 Sqft
                                    </li>
                                    <li>
                                        <span>Beds</span> 3
                                    </li>
                                    <li>
                                        <span>Baths</span> 2
                                    </li>
                                    <li>
                                        <span>Garage</span> 1
                                    </li>
                                </ul>
                                <div class="footer">
                                    <a href="#" tabindex="0">
                                        <i class="el-icon-user-solid"></i> Jhon Doe
                                    </a>
                                    <span>
                                          <i class="el-icon-date"></i>5 Days ago
                                    </span>
                                </div>
                            </div>
                      </el-col>
                    </el-row>
                </div>
                <div class="property-box-2" >
                    <el-row>
                      <el-col :span="10">
                        <div class="property-thumbnail">
                              <a href="properties-details.html" class="property-img">
                                  <img src="../../assets/properties-list-2.jpg" alt="properties" class="img-fluid">
                                  <div class="listing-badges">
                                      <span class="featured">Featured</span>
                                  </div>
                                  <div class="price-box"><span>$850.00</span> Per month</div>
                              </a>
                          </div>
                      </el-col>
                      <el-col :span="12">
                        <div class="detail">
                                <div class="hdg">
                                    <h3 class="title">
                                        <a href="properties-details.html">Park avenue</a>
                                    </h3>
                                    <h5 class="location">
                                        <a href="properties-details.html">
                                            <i class="el-icon-location-information"></i>20-21 Kathal St. Tampa City, FL
                                        </a>
                                    </h5>
                                </div>
                                <ul class="facilities-list clearfix">
                                    <li>
                                        <span>Area</span>3600 Sqft
                                    </li>
                                    <li>
                                        <span>Beds</span> 3
                                    </li>
                                    <li>
                                        <span>Baths</span> 2
                                    </li>
                                    <li>
                                        <span>Garage</span> 1
                                    </li>
                                </ul>
                                <div class="footer">
                                    <a href="#" tabindex="0">
                                        <i class="el-icon-user-solid"></i> Jhon Doe
                                    </a>
                                    <span>
                                          <i class="el-icon-date"></i>5 Days ago
                                    </span>
                                </div>
                            </div>
                      </el-col>
                    </el-row>
                </div>
                <div class="property-box-2" >
                  <el-row>
                      <el-col :span="10">
                        <div class="property-thumbnail">
                                <a href="properties-details.html" class="property-img">
                                    <img src="../../assets/properties-list-1.jpg" alt="properties" class="img-fluid">
                                    <div class="listing-badges">
                                        <span class="featured">Featured</span>
                                    </div>
                                    <div class="price-box"><span>$850.00</span> Per month</div>
                                </a>
                            </div>
                      </el-col>
                      <el-col :span="14">
                        <div class="detail">
                                <div class="hdg">
                                    <h3 class="title">
                                        <a href="properties-details.html">Relaxing Apartment</a>
                                    </h3>
                                    <h5 class="location">
                                        <a href="properties-details.html">
                                            <i class="el-icon-location-information"></i>20-21 Kathal St. Tampa City, FL
                                        </a>
                                    </h5>
                                </div>
                                <ul class="facilities-list clearfix">
                                    <li>
                                        <span>Area</span>3600 Sqft
                                    </li>
                                    <li>
                                        <span>Beds</span> 3
                                    </li>
                                    <li>
                                        <span>Baths</span> 2
                                    </li>
                                    <li>
                                        <span>Garage</span> 1
                                    </li>
                                </ul>
                                <div class="footer">
                                    <a href="#" tabindex="0">
                                        <i class="el-icon-user-solid"></i> Jhon Doe
                                    </a>
                                    <span>
                                          <i class="el-icon-date"></i>5 Days ago
                                    </span>
                                </div>
                            </div>
                      </el-col>
                    </el-row>
                </div>
                <div class="property-box-2" >
                  <el-row>
                      <el-col :span="10">
                        <div class="property-thumbnail">
                                <a href="properties-details.html" class="property-img">
                                    <img src="../../assets/properties-list-3.jpg" alt="properties" class="img-fluid">
                                    <div class="listing-badges">
                                        <span class="featured">Featured</span>
                                    </div>
                                    <div class="price-box"><span>$850.00</span> Per month</div>
                                </a>
                            </div>
                      </el-col>
                      <el-col :span="14">
                        <div class="detail">
                                <div class="hdg">
                                    <h3 class="title">
                                        <a href="properties-details.html">Modern Family Home</a>
                                    </h3>
                                    <h5 class="location">
                                        <a href="properties-details.html">
                                            <i class="el-icon-location-information"></i>20-21 Kathal St. Tampa City, FL
                                        </a>
                                    </h5>
                                </div>
                                <ul class="facilities-list clearfix">
                                    <li>
                                        <span>Area</span>3600 Sqft
                                    </li>
                                    <li>
                                        <span>Beds</span> 3
                                    </li>
                                    <li>
                                        <span>Baths</span> 2
                                    </li>
                                    <li>
                                        <span>Garage</span> 1
                                    </li>
                                </ul>
                                <div class="footer">
                                    <a href="#" tabindex="0">
                                        <i class="el-icon-user-solid"></i> Jhon Doe
                                    </a>
                                    <span>
                                          <i class="el-icon-date"></i>5 Days ago
                                    </span>
                                </div>
                            </div>
                      </el-col>
                    </el-row>
                </div>
                <!-- Page navigation start -->
                <div class="pagination-box hidden-mb-45 text-center">
                    <nav aria-label="Page navigation example">
                        <ul class="pagination">
                            <li class="page-item">
                                <a class="page-link" href="#">Prev</a>
                            </li>
                            <li class="page-item"><a class="page-link active" href="#">1</a></li>
                            <li class="page-item"><a class="page-link" href="properties-list-leftsidebar.html">2</a></li>
                            <li class="page-item"><a class="page-link" href="properties-list-fullwidth.html">3</a></li>
                            <li class="page-item">
                                <a class="page-link" href="properties-list-leftsidebar.html">Next</a>
                            </li>
                        </ul>
                    </nav>
                </div>
        </el-col>
        <el-col :span="8">
          <div class="sidebar-right">
                    <!-- Advanced search start -->
                    <div class="widget advanced-search">
                        <h3 class="sidebar-title">Advanced Search</h3>
                        <div class="s-border"></div>
                        <form method="GET">
                            <div class="form-group">
                                <select class="selectpicker search-fields" name="all-status">
                                    <option>All Status</option>
                                    <option>For Sale</option>
                                    <option>For Rent</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <select class="selectpicker search-fields" name="all-type">
                                    <option>All Type</option>
                                    <option>Apartments</option>
                                    <option>Shop</option>
                                    <option>Restaurant</option>
                                    <option>Villa</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <select class="selectpicker search-fields" name="commercial">
                                    <option>Commercial</option>
                                    <option>Residential</option>
                                    <option>Commercial</option>
                                    <option>Land</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <select class="selectpicker search-fields" name="location">
                                    <option>location</option>
                                    <option>United States</option>
                                    <option>American Samoa</option>
                                    <option>Belgium</option>
                                    <option>Canada</option>
                                </select>
                            </div>
                            <el-row>
                              <el-col :span="12">
                                <div class="form-group">
                                        <select class="selectpicker search-fields" name="bedrooms">
                                            <option>Bedrooms</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                        </select>
                                    </div>
                              </el-col>
                              <el-col :span="12">
                                <div class="form-group">
                                        <select class="selectpicker search-fields" name="bathroom">
                                            <option>Bathroom</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                        </select>
                                    </div>
                              </el-col>
                            </el-row>
                            <el-row>
                              <el-col :span="12">
                                 <div class="form-group">
                                        <select class="selectpicker search-fields" name="balcony">
                                            <option>Balcony</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                        </select>
                                    </div>
                              </el-col>
                              <el-col :span="12">
                                <div class="form-group">
                                        <select class="selectpicker search-fields" name="garage">
                                            <option>Garage</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                        </select>
                                    </div>
                              </el-col>
                            </el-row>
                            <div class="range-slider">
                                <label>Area</label>
                                <div data-min="0" data-max="10000" data-min-name="min_area" data-max-name="max_area" data-unit="Sq ft" class="range-slider-ui ui-slider" aria-disabled="false"></div>
                                <div class="clearfix"></div>
                            </div>
                            <div class="range-slider">
                                <label>Price</label>
                                <div data-min="0" data-max="150000"  data-min-name="min_price" data-max-name="max_price" data-unit="USD" class="range-slider-ui ui-slider" aria-disabled="false"></div>
                                <div class="clearfix"></div>
                            </div>
                            <a class="show-more-options" data-toggle="collapse" data-target="#options-content">
                                <i class="fa fa-plus-circle"></i> Other Features
                            </a>
                            <div id="options-content" class="collapse">
                                <h3 class="sidebar-title">Features</h3>
                                <div class="s-border"></div>
                                <div class="checkbox checkbox-theme checkbox-circle">
                                    <input id="checkbox2" type="checkbox">
                                    <label for="checkbox2">
                                        Air Condition
                                    </label>
                                </div>
                                <div class="checkbox checkbox-theme checkbox-circle">
                                    <input id="checkbox3" type="checkbox">
                                    <label for="checkbox3">
                                        Places to seat
                                    </label>
                                </div>
                                <div class="checkbox checkbox-theme checkbox-circle">
                                    <input id="checkbox4" type="checkbox">
                                    <label for="checkbox4">
                                        Swimming Pool
                                    </label>
                                </div>
                                <div class="checkbox checkbox-theme checkbox-circle">
                                    <input id="checkbox1" type="checkbox">
                                    <label for="checkbox1">
                                        Free Parking
                                    </label>
                                </div>
                                <div class="checkbox checkbox-theme checkbox-circle">
                                    <input id="checkbox7" type="checkbox">
                                    <label for="checkbox7">
                                        Central Heating
                                    </label>
                                </div>
                                <div class="checkbox checkbox-theme checkbox-circle">
                                    <input id="checkbox5" type="checkbox">
                                    <label for="checkbox5">
                                        Laundry Room
                                    </label>
                                </div>
                                <div class="checkbox checkbox-theme checkbox-circle">
                                    <input id="checkbox6" type="checkbox">
                                    <label for="checkbox6">
                                        Window Covering
                                    </label>
                                </div>
                                <div class="checkbox checkbox-theme checkbox-circle">
                                    <input id="checkbox8" type="checkbox">
                                    <label for="checkbox8">
                                        Alarm
                                    </label>
                                </div>
                                <br>
                            </div>
                            <div class="form-group mb-0">
                                <button class="search-button">Search</button>
                            </div>
                        </form>
                    </div>
                    <!-- Recent properties start -->
                    <div class="widget recent-properties">
                        <h3 class="sidebar-title">Recent Properties</h3>
                        <div class="s-border"></div>
                        <div class="media mb-4">
                            <a class="pr-3" href="properties-details.html">
                                <img class="media-object" src="../../assets/small-properties-1.jpg" alt="small-properties">
                            </a>
                            <div class="media-body align-self-center">
                                <h5>
                                    <a href="properties-details.html">Modern Family Home</a>
                                </h5>
                                <div class="listing-post-meta">
                                    $345,000 | <a href="#"><i class="fa fa-calendar"></i> Oct 27, 2018 </a>
                                </div>
                            </div>
                        </div>
                        <div class="media mb-4">
                            <a class="pr-3" href="properties-details.html">
                                <img class="media-object" src="../../assets/small-properties-2.jpg" alt="small-properties">
                            </a>
                            <div class="media-body align-self-center">
                                <h5>
                                    <a href="properties-details.html">Beautiful Single Home</a>
                                </h5>
                                <div class="listing-post-meta">
                                    $415,000 | <a href="#"><i class="fa fa-calendar"></i> Feb 14, 2018 </a>
                                </div>
                            </div>
                        </div>
                        <div class="media">
                            <a class="pr-3" href="properties-details.html">
                                <img class="media-object" src="../../assets/small-properties-3.jpg" alt="small-properties">
                            </a>
                            <div class="media-body align-self-center">
                                <h5>
                                    <a href="properties-details.html">Real Luxury Villa</a>
                                </h5>
                                <div class="listing-post-meta">
                                    $345,000 | <a href="#"><i class="fa fa-calendar"></i> Oct 12, 2018 </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Posts by category Start -->
                    <div class="posts-by-category widget">
                        <h3 class="sidebar-title">Category</h3>
                        <div class="s-border"></div>
                        <ul class="list-unstyled list-cat">
                            <li><a href="#">Single Family <span>(45)</span></a></li>
                            <li><a href="#">Apartment <span>(21)</span> </a></li>
                            <li><a href="#">Condo <span>(23)</span></a></li>
                            <li><a href="#">Multi Family <span>(19)</span></a></li>
                            <li><a href="#">Villa <span>(19)</span></a> </li>
                            <li><a href="#">Other <span>(22) </span></a></li>
                        </ul>
                    </div>
                    <!-- Our agent sidebar start -->
                    <div class="our-agent-sidebar">
                        <div class="p-20">
                            <h3 class="sidebar-title">Our Agent</h3>
                            <div class="s-border"></div>
                        </div>
                        <div id="carouselExampleIndicators5" class="carousel slide text-center" data-ride="carousel">
                            <ol class="carousel-indicators">
                                <li data-target="#carouselExampleIndicators5" data-slide-to="0" class="active"></li>
                                <li data-target="#carouselExampleIndicators5" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators5" data-slide-to="2"></li>
                            </ol>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <div class="team-1">
                                        <div class="team-photo">
                                            <a href="#">
                                                <img src="img/avatar/avatar-7.jpg" alt="agent-2" class="img-fluid">
                                            </a>
                                            <ul class="social-list clearfix">
                                                <li><a href="#" class="facebook"><i class="fa fa-facebook"></i></a></li>
                                                <li><a href="#" class="twitter"><i class="fa fa-twitter"></i></a></li>
                                                <li><a href="#" class="instagram"><i class="fa fa-instagram"></i></a></li>
                                                <li><a href="#" class="linkedin"><i class="fa fa-linkedin"></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="team-details">
                                            <h5><a href="agent-detail.html">Martin Smith</a></h5>
                                            <h6>Web Developer</h6>
                                            <h4>+1 204 777 0187</h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div class="team-1">
                                        <div class="team-photo">
                                            <a href="#">
                                                <img src="img/avatar/avatar-6.jpg" alt="agent-2" class="img-fluid">
                                            </a>
                                            <ul class="social-list clearfix">
                                                <li><a href="#" class="facebook"><i class="fa fa-facebook"></i></a></li>
                                                <li><a href="#" class="twitter"><i class="fa fa-twitter"></i></a></li>
                                                <li><a href="#" class="instagram"><i class="fa fa-instagram"></i></a></li>
                                                <li><a href="#" class="linkedin"><i class="fa fa-linkedin"></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="team-details">
                                            <h5><a href="agent-detail.html">John Pitarshon</a></h5>
                                            <h6>Web Developer</h6>
                                            <h4>+1 204 777 0187</h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div class="team-1">
                                        <div class="team-photo">
                                            <a href="#">
                                                <img src="img/avatar/avatar-5.jpg" alt="agent-2" class="img-fluid">
                                            </a>
                                            <ul class="social-list clearfix">
                                                <li><a href="#" class="facebook"><i class="fa fa-facebook"></i></a></li>
                                                <li><a href="#" class="twitter"><i class="fa fa-twitter"></i></a></li>
                                                <li><a href="#" class="instagram"><i class="fa fa-instagram"></i></a></li>
                                                <li><a href="#" class="linkedin"><i class="fa fa-linkedin"></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="team-details">
                                            <h5><a href="agent-detail.html">Karen Paran</a></h5>
                                            <h6>Web Developer</h6>
                                            <h4>+1 204 777 0187</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </el-col>
      </el-row>
    </div>
</div>
</template>

<script>
export default {}
</script>
