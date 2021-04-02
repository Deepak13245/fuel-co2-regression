# Predicting CO2 Emission of vehicles

Dataset https://www.kaggle.com/debajyotipodder/co2-emission-by-vehicles

Live https://co2-prediction.web.app/

Trained on linear regression with accuracy of 0.993 (r2 adjusted score)


Final model is found in models/model.m5 which is pickled using joblib

## Equation of the model

<img src="https://latex.codecogs.com/png.latex?\hat{y}&space;=&space;\beta_{0}&space;&plus;&space;Fuel&space;Consumption&space;City&space;\times&space;\beta_{1}&space;&plus;&space;Fuel&space;Consumption&space;Hwy&space;\times&space;\beta_{2}&space;&plus;&space;Fuel&space;Diesel&space;\times&space;\beta_{3}&space;&plus;&space;Gears&space;\times&space;\beta_{4}&space;&plus;&space;Pickup&space;truck&space;small&space;\times&space;\beta_{5}&space;&plus;&space;Full&space;size&space;\times&space;\beta_{6}&space;&plus;&space;Van&space;passenger&space;\times&space;\beta_{7}&plus;&space;Van&space;cargo&space;\times&space;\beta_{8}&space;&plus;&space;Fuel&space;Ethanol&space;\times&space;\beta_{9}" title="\hat{y} = \beta_{0} + Fuel Consumption City \times \beta_{1} + Fuel Consumption Hwy \times \beta_{2} + Fuel Diesel \times \beta_{3} + Gears \times \beta_{4} + Pickup truck small \times \beta_{5} + Full size \times \beta_{6} + Van passenger \times \beta_{7}+ Van cargo \times \beta_{8} + Fuel Ethanol \times \beta_{9}" />

<img src="https://latex.codecogs.com/png.latex?\beta_{0}&space;=&space;251.104489&space;,&space;\beta_{1}&space;=&space;44.965753&space;,&space;\beta_{2}&space;=&space;22.918521&space;,&space;\beta_{3}&space;=&space;4.347370&space;,&space;\beta_{4}&space;=&space;0.774746&space;,&space;\beta_{5}&space;=&space;0.436418&space;,&space;\beta_{6}&space;=&space;0.275594&space;,&space;\beta_{7}&space;=&space;-0.678920&space;,&space;\beta_{8}&space;=&space;-1.027355&space;,&space;\beta_{9}&space;=&space;-25.440881" title="\beta_{0} = 251.104489 , \beta_{1} = 44.965753 , \beta_{2} = 22.918521 , \beta_{3} = 4.347370 , \beta_{4} = 0.774746 , \beta_{5} = 0.436418 , \beta_{6} = 0.275594 , \beta_{7} = -0.678920 , \beta_{8} = -1.027355 , \beta_{9} = -25.440881" />

<img src="https://latex.codecogs.com/png.latex?\hat{y}&space;=&space;251.104489&space;&plus;&space;Fuel&space;Consumption&space;City&space;\times&space;44.965753&space;&plus;&space;Fuel&space;Consumption&space;Hwy&space;\times&space;22.918521&space;&plus;&space;Fuel&space;Diesel&space;\times&space;4.347370&space;&plus;&space;Gears&space;\times&space;0.774746&space;&plus;&space;Pickup&space;truck&space;small&space;\times&space;0.436418&space;&plus;&space;Full&space;size&space;\times&space;0.275594&space;&plus;&space;Van&space;passenger&space;\times&space;(-0.678920)&space;&plus;&space;Van&space;cargo&space;\times&space;(-1.027355)&space;&plus;&space;Fuel&space;Ethanol&space;\times&space;(-25.440881)" title="\hat{y} = 251.104489 + Fuel Consumption City \times 44.965753 + Fuel Consumption Hwy \times 22.918521 + Fuel Diesel \times 4.347370 + Gears \times 0.774746 + Pickup truck small \times 0.436418 + Full size \times 0.275594 + Van passenger \times (-0.678920) + Van cargo \times (-1.027355) + Fuel Ethanol \times (-25.440881)" />
