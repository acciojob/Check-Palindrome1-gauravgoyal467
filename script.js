// complete the given function

function palindrome(str){
	let ans=str.split(" ").join();
	let i=0;let j=ans.length-1;
	while(i<j){
		if(ans.charAt(i)!=ans.charAt(j)){
			return false;
		}
	}
	retur true;
}
module.exports = palindrome
