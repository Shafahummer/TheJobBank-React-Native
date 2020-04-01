import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import {
  MaterialCommunityIcons, 
  Feather, 
  MaterialIcons,
  FontAwesome5,
  Entypo,
  AntDesign
} from '@expo/vector-icons';



const result=require('../data.json')

export default class HomeScreen extends React.Component {

  static navigationOptions={
    headerLeft: ()=>
        <View style={{flexDirection:"row"}}>
        <MaterialCommunityIcons name="hexagon-outline" size={25} color="#DFAF2B" style={{marginLeft:10}}/>
        <Text style={{color:"#fff",fontWeight:"bold",marginTop:5, fontSize:12}}>THE </Text>
        <Text style={{color:"#DFAF2B",fontWeight:"bold", marginTop:5, fontSize:12}}>JOB </Text>
        <Text style={{color:"#fff",fontWeight:"bold",marginTop:5, fontSize:12}}>BANK</Text>
        </View>,
    headerRight: ()=>
        <View style={{flexDirection:"row"}}>
            <TouchableOpacity>  
                <Feather name="home" size={12} color="#fff" style={{marginEnd:5, marginTop:-1}}/>
              </TouchableOpacity>
            <TouchableOpacity>
                <Text style={{fontSize:8, marginEnd:5, color:"#fff"}}>Services</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={{fontSize:8, marginEnd:5, color:"#fff"}}>job Roles</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={{fontSize:8, marginEnd:5, color:"#fff"}}>About Us</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={{fontSize:8, marginEnd:7, color:"#fff"}}>Contact Us</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Feather name="headphones" size={12} color="#fff" style={{marginEnd:5, marginTop:-1}}/>
            </TouchableOpacity>
        </View>
      

  };

  render(){
    return (
      <ScrollView style={styles.container}>

        <View style={styles.headerViewContainer}>
            <Text style={styles.welcomeOnBoard}>Welcome On Board..</Text>
            <Text style={styles.letsDriveText}>Let's Drive To The{"\n"}Desired Destination!!</Text>
            <Text style={styles.descriptionText}>Do you feel your education qualification
              is not quite enough for the job you{"\n"}desire?Do you feel that you lack 
              the skills necessary for a career change?{"\n"}Register with job bank and take the big
              leap to land your dream job.</Text>          
        </View>

        <View style={styles.registerViewContainer}>

          <View style={styles.fresherText}>
            <View>
            <Text style={styles.areYouText}>Are you a</Text>
            <Text style={styles.desigText}>Fresher?</Text>
            <Text style={styles.descText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
            <TouchableOpacity style={{width:60}}>
              <Text style={styles.registerText}>Register</Text>
            </TouchableOpacity>
            </View>
          </View>

          <View style={styles.upgradeText}>
          <Text style={styles.areYouText}>Are looking for a</Text>
            <Text style={styles.desigText}>Job Upgrade?</Text>
            <Text style={styles.descText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
            <TouchableOpacity style={{width:60}}>
              <Text style={styles.registerTextUpgrade}>Register</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.employerText}>
          <Text style={styles.areYouText}>Are you an</Text>
            <Text style={styles.desigText}>Employer?</Text>
            <Text style={styles.descText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
            <TouchableOpacity style={{width:60}}>
              <Text style={styles.registerText}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>


      <View style={styles.employersNumberContainer}>
        <View style={styles.desigContainer}>
          <MaterialCommunityIcons name="human-male" size={40} color="#000"/>
          <View>
          <Text style={{fontWeight:'bold'}}>500+</Text>
          <Text style={styles.desigTextSize}>Freshers</Text> 
          </View>
        </View>

        <View style={styles.desigContainer}>
          <MaterialCommunityIcons name="human-male" size={40} color="#000"/>
          <View>
          <Text style={{fontWeight:'bold'}}>458+</Text>
          <Text style={styles.desigTextSize}>Experienced</Text> 
          </View>
        </View>

        <View style={styles.desigContainer}>
          <MaterialCommunityIcons name="human-male" size={40} color="#000"/>
          <View>
          <Text style={{fontWeight:'bold'}}>394+</Text>
          <Text style={styles.desigTextSize}>Employers</Text> 
          </View>
        </View>     
      </View>

      
      <View style={{alignItems:"center"}}>
        <Text style={{fontWeight:'bold', marginTop:25}}>Top Job Roles</Text>
      </View>

      <View style={{marginTop:15, marginHorizontal:20}}>

        <View style={{flexDirection:"row"}}>
          <View style={styles.roundedView}>
            <View style={styles.roundedViewContainer}>
              <MaterialIcons name="computer" size={25} color="#fff"/>
            </View>
            <Text style={{fontSize:5}}>Accountant</Text>
          </View>

          <View style={styles.roundedView}>
            <View style={styles.roundedViewContainer}>
              <MaterialCommunityIcons name="human-greeting" size={25} color="#fff"/>
            </View>
            <Text style={{fontSize:5}}>BPO / Customer care</Text>
          </View>

          <View style={styles.roundedView}>
            <View style={styles.roundedViewContainer}>
              <FontAwesome5 name="book-reader" size={25} color="#fff"/>
            </View>
            <Text style={{fontSize:5}}>Data Entry / Back Office</Text>
          </View>

          <View style={styles.roundedView}>
            <View style={styles.roundedViewContainer}>
              <Entypo name="shopping-cart" size={25} color="#fff"/>
            </View>
            <Text style={{fontSize:5}}>Sales / Marketing</Text>
          </View>

          <View style={styles.roundedView}>
            <View style={styles.roundedViewContainer}>
              <FontAwesome5 name="laptop" size={25} color="#fff"/>
            </View>
            <Text style={{fontSize:5}}>Receptionist / Front Office</Text>
          </View>
        </View>



        <View style={{flexDirection:"row", marginTop:18}}>
          <View style={styles.roundedView}>
            <View style={styles.roundedViewContainer}>
              <FontAwesome5 name="hospital-alt" size={25} color="#fff"/>
            </View>
            <Text style={{fontSize:5}}>Hospitality Executives</Text>
          </View>

          <View style={styles.roundedView}>
            <View style={styles.roundedViewContainer}>
              <MaterialCommunityIcons name="truck-delivery" size={25} color="#fff"/>
            </View>
            <Text style={{fontSize:5}}>Delivery</Text>
          </View>

          <View style={styles.roundedView}>
            <View style={styles.roundedViewContainer}>
              <MaterialCommunityIcons name="food" size={25} color="#fff"/>
            </View>
            <Text style={{fontSize:5}}>Cook / Shef</Text>
          </View>

          <View style={styles.roundedView}>
            <View style={styles.roundedViewContainer}>
              <FontAwesome5 name="heart" size={25} color="#fff"/>
            </View>
            <Text style={{fontSize:5}}>Beauticians / Spa</Text>
          </View>

          <View style={styles.roundedView}>
            <View style={styles.roundedViewContainer}>
              <FontAwesome5 name="car" size={25} color="#fff"/>
            </View>
            <Text style={{fontSize:5}}>Driver</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity style={{marginTop:20, alignItems:"center", justifyContent:"center"}}>
        <Text style={styles.viewAllBtn}>View All Roles</Text>
      </TouchableOpacity>


        <View style={{height:200, marginTop:20,flexDirection:"row"}}>
        <Image
        source={require ("../assets/img.png")}
        style={{width:150,height:150, marginHorizontal:20}}
        />
        <View>
          <Text style={{fontWeight:'bold',marginHorizontal:10, marginTop:20, fontSize:10}}>Welcome On Board..</Text>
          <Text style={{marginHorizontal:10, fontSize:12}}>Let's Drive To The Desired{"\n"}Destination!!</Text>
          <Text style={{fontSize:4, marginHorizontal:10}}>As a job seeker, do you feel you educational qualification is not sufficient for
    the job{"\n"}you desire?The process is simple!Whether you are looking for a job or a
    career{"\n"}change, whatever be your educational qualification, step into The job Bank.
          </Text>
          <TouchableOpacity style={{marginTop:5}}>
        <Text style={styles.readMoreBtn}>Read More</Text>
      </TouchableOpacity>
        </View>
        </View>

      <View style={{alignItems:"center", flexDirection:"row", justifyContent:"center"}}>
        <View
          style={{
          borderBottomColor: 'black',
          borderBottomWidth: 1,
          width:80
        }}/>
        <Text style={{marginHorizontal:10, fontWeight:'bold', color:"#616C6F"}}>MAJOR SERVICE</Text>
        <View
          style={{
          borderBottomColor: 'black',
          borderBottomWidth: 1,
          width:80
        }}/>
      </View>

      <View style={{flexDirection:"row",marginTop:20,marginHorizontal:15}}>

      <View style={{flex:1,alignItems:"center",justifyContent:"center",marginHorizontal:10}}>
        <Image
        source={{uri:result.data[0].image}}
        style={{width:80,height:80}}
        />
       <Text style={{fontWeight:"bold", fontSize:10,marginStart:15}}>{result.data[0].title}</Text>
      <Text style={{fontSize:6}}>{result.data[0].description}</Text>
      </View>

      <View style={{flex:1,alignItems:"center",justifyContent:"center",marginHorizontal:10}}>
        <Image
        source={{uri:result.data[1].image}}
        style={{width:80,height:80}}
        />
        <Text style={{fontWeight:"bold", fontSize:10,marginStart:5}}>{result.data[1].title}</Text>
      <Text style={{fontSize:6}}>{result.data[1].description}</Text>
      </View>

      <View style={{flex:1,alignItems:"center",justifyContent:"center",marginHorizontal:10}}>
        <Image
        source={{uri:result.data[2].image}}
        style={{width:80,height:80}}
        />
        <Text style={{fontWeight:"bold", fontSize:10}}>{result.data[2].title}</Text>
      <Text style={{fontSize:6}}>{result.data[2].description}</Text>
      </View>

      </View>


      <View style={{flexDirection:"row",marginTop:20,marginHorizontal:15}}>

      <View style={{flex:1,alignItems:"center",justifyContent:"center",marginHorizontal:10}}>
        <Image
        source={{uri:result.data[3].image}}
        style={{width:80,height:80}}
        />
       <Text style={{fontWeight:"bold", fontSize:10,marginStart:10}}>{result.data[3].title}</Text>
      <Text style={{fontSize:6}}>{result.data[3].description}</Text>
      </View>

      <View style={{flex:1,alignItems:"center",justifyContent:"center",marginHorizontal:10}}>
        <Image
        source={{uri:result.data[4].image}}
        style={{width:80,height:80}}
        />
        <Text style={{fontWeight:"bold", fontSize:10,marginStart:5}}>{result.data[4].title}</Text>
      <Text style={{fontSize:6}}>{result.data[4].description}</Text>
      </View>

      <View style={{flex:1,alignItems:"center",justifyContent:"center",marginHorizontal:10}}>
        <Image
        source={{uri:result.data[5].image}}
        style={{width:80,height:80}}
        />
        <Text style={{fontWeight:"bold", fontSize:10}}>{result.data[5].title}</Text>
      <Text style={{fontSize:6}}>{result.data[5].description}</Text>
      </View>
      </View>

      <View style={{marginTop:15,alignItems:"center",justifyContent:"center"}}>
        <TouchableOpacity>
          <Text style={styles.addServiceBtn}>Add Service</Text>
        </TouchableOpacity>
      </View>

      <View style={{marginTop:10,alignItems:"center",justifyContent:"center",marginTop:25,backgroundColor:"#2B2B52"}}>
        <Text style={styles.bottomBar}>We are determined to be a Global Job Player by aligning our growth
          to the needs of industry and job-ready work force.We put the jobless to Work.
        </Text>
      </View>

        <View style={{flexDirection:"row",marginTop:15,marginBottom:35,paddingHorizontal:15}}>

          <View style={{alignItems:"center",justifyContent:"center",flex:1}}>
            <View style={{flexDirection:"row"}}>
              <MaterialCommunityIcons name="hexagon-outline" size={25} color="#DFAF2B"/>
              <Text style={styles.theJobBankText}>THE </Text>
              <Text style={{color:"#DFAF2B",fontWeight:"bold", marginTop:5, fontSize:12}}>JOB </Text>
              <Text style={styles.theJobBankText}>BANK</Text>
            </View>
            <View>
              <Text style={{fontSize:5,marginLeft:8}}>33/725 A, Rak Towers, Near Mother Opticals, NH 544 - Aluva
                {"\n"}Road, Edapally Kochi-682024</Text>
                
            </View>
          </View>
     

        <View style={{flex:1, alignItems:"center", justifyContent:"center"}}>
          <View style={styles.useFullLinksContainer}>
            
              <Text style={styles.useFullLinksText}>Usefull Links</Text>

              
            <View>
              <View style={styles.rightArrowViewContainer}>
                  <AntDesign name="rightcircleo" size={6} color="#000" style={{marginEnd:4}}/>
                  <Text style={{fontSize:7}}>Home</Text>
              </View>
            </View>

          
            <View>
                <View style={styles.rightArrowViewContainer}>
                  <AntDesign name="rightcircleo" size={6} color="#000" style={{marginEnd:4}}/>
                  <Text style={{fontSize:7}}>Services</Text>
                </View>
                
            </View>

            
            <View>
                <View style={styles.rightArrowViewContainer}>
                  <AntDesign name="rightcircleo" size={6} color="#000" style={{marginEnd:4}}/>
                  <Text style={{fontSize:7}}>Job Roles</Text>
                </View>
               
            </View>

           
            <View>
                <View style={styles.rightArrowViewContainer}>
                
                  <AntDesign name="rightcircleo" size={6} color="#000" style={{marginEnd:4}}/>
               
                  <Text style={{fontSize:7}}>About Us</Text>
                </View>
                
            </View>

            
            <View>
                <View style={styles.rightArrowViewContainer}>
                  <AntDesign name="rightcircleo" size={6} color="#000" style={{marginEnd:4}}/>
                  <Text style={{fontSize:7}}>Contact Us</Text>
                </View>
                </View>
            
            
          </View>
          
        </View>


          <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
            
            <View style={{flexDirection:"row"}}>
            <Text style={{fontSize:8,marginTop:-3}}>An initiative of</Text>
            <View style={{flexDirection:"row"}}>
              <View style={{width:4,backgroundColor:"#2B2B52",height:18,marginLeft:8}}/>
              <View style={{width:4,backgroundColor:"#000",height:12,marginLeft:1,marginTop:6}}/>
              <View style={{width:4,backgroundColor:"#2B2B52",height:18,marginLeft:1}}/>
              <Text style={{fontSize:23,marginTop:-6,fontWeight:"bold"}}>MR</Text>
            </View>  
            </View>

            <View>
            <Text style={{marginLeft:88,fontSize:8,marginTop:-8}}>Group</Text>
            <View style={{flexDirection:"row"}}>
            <TouchableOpacity style={{flex:1}}>
              <Entypo name="facebook-with-circle" size={20} color="#6A89CC"/>
            </TouchableOpacity>
            <TouchableOpacity style={{flex:1}}>
            <Entypo name="twitter-with-circle" size={20} color="#74B9FF"/>
            </TouchableOpacity>
            <TouchableOpacity style={{flex:1}}>
            <Entypo name="linkedin-with-circle" size={20} color="#2475B0"/>
            </TouchableOpacity>
            <TouchableOpacity style={{flex:1}}>
            <Entypo name="instagram-with-circle" size={20} color="#E74292"/>
            </TouchableOpacity>
            </View>
            </View>  
          </View>

        </View>

        <View style={styles.copyrightViewContainer}>
            <Text style={{fontSize:4,color:"#616C6F"}}>Copyright 2019 The Job Bank</Text>
          </View>
      </ScrollView>
    );
  } 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerViewContainer:{
    backgroundColor:"#30336B",
    height:130,
    justifyContent:"center",
  },
  welcomeOnBoard:{
    fontSize:8,
    color:"#fff",
    marginLeft:20,
  },
  letsDriveText:{
    marginLeft:20,
    fontSize:12,
    color:"#F4C724"
  },
  descriptionText:{
    marginLeft:20,
    fontSize:6,
    color:"#fff"
  },
  registerViewContainer:{
    height:100,
    flexDirection:"row"
  },
  fresherText:{
    backgroundColor:"#F3B63A",
    justifyContent:"center",
    flex:1
  },
  upgradeText:{
    justifyContent:"center",
    flex:1,
  },
  employerText:{
    backgroundColor:"#F3B63A",
    justifyContent:"center",
    flex:1
  },
  registerText:{
    backgroundColor:"#fff",
    color:"#000",
    borderRadius:8,
    borderColor:"#EA7773",
    borderWidth:1,
    fontSize:10,
    paddingHorizontal:4,
    marginLeft:10,
    marginTop:8
  },
  registerTextUpgrade:{
    backgroundColor:"#fff",
    color:"#000",
    borderRadius:8,
    borderColor:"#8395A7",
    borderWidth:1,
    fontSize:10,
    paddingHorizontal:4,
    marginLeft:10,
    marginTop:8
  },
  areYouText:{
    marginLeft:10,
    fontWeight:'bold', 
    fontSize:8
  },
  desigText:{
    fontWeight:'bold', 
    marginLeft:10, 
    fontSize:12
  },
  descText:{
    fontSize:6, 
    marginLeft:10
  },
  employersNumberContainer:{
    height:70,
    flexDirection:"row"
  },
  desigContainer:{
    flex:1, 
    justifyContent:"center", 
    flexDirection:"row", 
    alignItems:"center"
  },
  desigTextSize:{
    fontSize:10
  },
  roundedViewContainer:{
    width: 40,
    height: 40,
    borderRadius: 40/2,
    backgroundColor: '#30336B', 
    alignItems:"center", 
    justifyContent:"center"
  },
  roundedView:{
    alignItems:"center", 
    flex:1
  },
  viewAllBtn:{
    fontSize:10,
    backgroundColor:"#2B2B52",
    color:"#fff",
    paddingHorizontal:8,
    paddingVertical:8,
    borderRadius:8,
    borderColor:"#fff",
    borderWidth:2,
    fontWeight:'bold'
  },
  readMoreBtn:{
    fontSize:8,
    backgroundColor:"#2B2B52",
    color:"#fff",
    paddingLeft:10,
    paddingVertical:5,
    paddingTop:7,
    borderRadius:6,
    borderColor:"#fff",
    borderWidth:2,
    fontWeight:'bold',
    width:60,
    marginLeft:8
  },
  addServiceBtn:{
    fontSize:8,
    backgroundColor:"#2B2B52",
    color:"#fff",
    paddingLeft:8,
    paddingVertical:5,
    paddingTop:7,
    borderRadius:6,
    borderColor:"#fff",
    borderWidth:2,
    fontWeight:'bold',
    width:60,
    marginLeft:8
  },
  bottomBar:{
    fontSize:5,
    backgroundColor:"#2B2B52",
    color:"#fff",
    paddingVertical:5
  },
  theJobBankText:{
    color:"#2B2B52",
    fontWeight:"bold",
    marginTop:5, 
    fontSize:12
  },
  rightArrowViewContainer:{
    flexDirection:"row",
    alignItems:"center",

  },
  useFullLinksContainer:{
    flex:1
  },
  useFullLinksText:{
    fontWeight:"bold",
    fontSize:8
  },
  copyrightViewContainer:{
    alignItems:"center",
    justifyContent:"center",
    marginBottom:20
  }
})
