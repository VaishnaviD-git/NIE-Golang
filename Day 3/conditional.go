package main

import "fmt"

func main(){	

	n:=20
	if(n % 2==0){
		fmt.Println(n, "is Even ")
	} else{
		fmt.Println(n, "isnOdd")
	}
	fmt.Println("\n")


day := "Monday"
switch day{
case "Monday":
	fmt.Println("Start of the Week")

case "Saturday":
	fmt.Println("End of the Week")

default:
	fmt.Println("May be a Regular Day")

}
}
