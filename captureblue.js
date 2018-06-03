function CaptureUPBLUE(row, col) {
	
	var PartnerR = (row - 3)
	var PartnerC = col
	var y1 = (row - 1)
	var y2 = (row - 2)
	if(SpaceOwnerShip[PartnerR][PartnerC] == -1)
	{
		if(SpaceOwnerShip[y1][PartnerC] == 1 && SpaceOwnerShip[y2][PartnerC] == 1)
		{
			SpaceOwnerShip[y1][PartnerC] = 0
			SpaceOwnerShip[y2][PartnerC] = 0
			CapturedGreen++
		}		
	}
}


function CaptureDOWNBLUE(row, col) {

	var PartnerR = (row + 3)
	var PartnerC = col
	var y1 = (row + 1)
	var y2 = (row + 2)
	if(SpaceOwnerShip[PartnerR][PartnerC] == -1)
	{
		if(SpaceOwnerShip[y1][PartnerC] == 1 && SpaceOwnerShip[y2][PartnerC] == 1)
		{
			SpaceOwnerShip[y1][PartnerC] = 0
			SpaceOwnerShip[y2][PartnerC] = 0
			CapturedGreen++
		}	
	}
}



function CaptureLEFTBLUE(row, col) {
	
	var PartnerR =  row
	var PartnerC = col - 3
	var x1 = (col - 1)
	var x2 = (col - 2)
	
	if(SpaceOwnerShip[PartnerR][PartnerC] == -1)
	{
		
		if(SpaceOwnerShip[PartnerR][x2] == 1 && SpaceOwnerShip[PartnerR][x1] == 1)
		{			
			SpaceOwnerShip[PartnerR][x2] = 0
			SpaceOwnerShip[PartnerR][x1] = 0
			CapturedGreen++
		}	
	}
	
}

function CaptureRightBLUE(row, col) {

	var PartnerR =  row
	var PartnerC = col + 3
	var x1 = (col + 1)
	var x2 = (col + 2)
	
	
	if(SpaceOwnerShip[PartnerR][PartnerC] == -1)
	{
		if(SpaceOwnerShip[PartnerR][x2] == 1 && SpaceOwnerShip[PartnerR][x1] == 1)
		{
			SpaceOwnerShip[PartnerR][x2] = 0
			SpaceOwnerShip[PartnerR][x1] = 0
			CapturedGreen++
		}	
	}
}

function CaptureD1BLUE(row, col) {

	var PartnerR = row + 3
	var PartnerC = col + 3
	var r1 = (row + 1)
	var r2 = (row + 2)
	var c1 = (col + 1)
	var c2 = (col + 2)
	
	
	if(SpaceOwnerShip[PartnerR][PartnerC] == -1)
	{
		if(SpaceOwnerShip[r1][c1] == 1 && SpaceOwnerShip[r2][c2] == 1)
		{
			SpaceOwnerShip[r1][c1] = 0
			SpaceOwnerShip[r2][c2] = 0
			CapturedGreen++
		}	
	}
}

function CaptureD2BLUE(row, col) {

	var PartnerR = row - 3
	var PartnerC = col + 3
	var r1 = (row - 1)
	var r2 = (row - 2)
	var c1 = (col + 1)
	var c2 = (col + 2)
	
	
	if(SpaceOwnerShip[PartnerR][PartnerC] == -1)
	{
		if(SpaceOwnerShip[r1][c1] == 1 && SpaceOwnerShip[r2][c2] == 1)
		{
			SpaceOwnerShip[r1][c1] = 0
			SpaceOwnerShip[r2][c2] = 0
			CapturedGreen++
		}	
	}
}

function CaptureD3BLUE(row, col) {

	var PartnerR = row - 3
	var PartnerC = col - 3
	var r1 = (row - 1)
	var r2 = (row - 2)
	var c1 = (col - 1)
	var c2 = (col - 2)
	
	
	if(SpaceOwnerShip[PartnerR][PartnerC] == -1)
	{
		if(SpaceOwnerShip[r1][c1] == 1 && SpaceOwnerShip[r2][c2] == 1)
		{
			SpaceOwnerShip[r1][c1] = 0
			SpaceOwnerShip[r2][c2] = 0
			CapturedGreen++
		}	
	}
}

function CaptureD4BLUE(row, col) {

	var PartnerR = row + 3
	var PartnerC = col - 3
	var r1 = (row + 1)
	var r2 = (row + 2)
	var c1 = (col - 1)
	var c2 = (col - 2)
	
	
	if(SpaceOwnerShip[PartnerR][PartnerC] == -1)
	{
		if(SpaceOwnerShip[r1][c1] == 1 && SpaceOwnerShip[r2][c2] == 1)
		{
			SpaceOwnerShip[r1][c1] = 0
			SpaceOwnerShip[r2][c2] = 0
			CapturedGreen++
		}	
	}
}




/* 
---------CHECK FOR WINNER ------------------------------------------------------------------------------------------------------
*/

function CheckWinnerDownB(row, col) {
var hasWON = false

	var PartnerR1 = (row + 1)
	var PartnerR2 = (row + 2)
	var PartnerR3 = (row + 3)
	var PartnerR4 = (row + 4)
	var PartnerR_1 = (row - 1)
	var PartnerR_2 = (row - 2)
	var PartnerR_3 = (row - 3)
	var PartnerR_4 = (row - 4)
	var PartnerC = col
	var inarowUP = 0
	var inarowDOWN = 0
	
	
		while (true) {
				
				if(SpaceOwnerShip[PartnerR1][PartnerC] == -1)
					inarowUP++
				else
					break
				if(SpaceOwnerShip[PartnerR2][PartnerC] == -1)
					inarowUP++
				else
					break
				if(SpaceOwnerShip[PartnerR3][PartnerC] == -1)
					inarowUP++
				else
					break
				if(SpaceOwnerShip[PartnerR4][PartnerC] == -1){
					inarowUP++				
					hasWON = true
				}else
					break
			break
		}
		
		while (true) {
				
				if(SpaceOwnerShip[PartnerR_1][PartnerC] == -1)
					inarowDOWN++
				else
					break
				if(SpaceOwnerShip[PartnerR_2][PartnerC] == -1)
					inarowDOWN++
				else
					break
				if(SpaceOwnerShip[PartnerR_3][PartnerC] == -1)
					inarowDOWN++
				else
					break
				if(SpaceOwnerShip[PartnerR_4][PartnerC] == -1){
					inarowDOWN++				
					hasWON = true
				}else
					break
			break
		}
		
		
		
		if((inarowDOWN + inarowUP) > 3)
			hasWON = true
		if(hasWON) 
			bluewins()			
}






function CheckWinnerLRB(row, col) {
var hasWON = false

	var PartnerC1 = (col + 1)
	var PartnerC2 = (col + 2)
	var PartnerC3 = (col + 3)
	var PartnerC4 = (col + 4)
	var PartnerC_1 = (col - 1)
	var PartnerC_2 = (col - 2)
	var PartnerC_3 = (col - 3)
	var PartnerC_4 = (col - 4)
	var PartnerR = row
	var inarowUP = 0
	var inarowDOWN = 0
	
	
		while (true) {
				
				if(SpaceOwnerShip[PartnerR][PartnerC1] == -1)
					inarowUP++
				else
					break
				if(SpaceOwnerShip[PartnerR][PartnerC2] == -1)
					inarowUP++
				else
					break
				if(SpaceOwnerShip[PartnerR][PartnerC3] == -1)
					inarowUP++
				else
					break
				if(SpaceOwnerShip[PartnerR][PartnerC4] == -1){
					inarowUP++				
					hasWON = true
				}else
					break
			break
		}
		
		while (true) {
				
				if(SpaceOwnerShip[PartnerR][PartnerC_1] == -1)
					inarowDOWN++
				else
					break
				if(SpaceOwnerShip[PartnerR][PartnerC_2] == -1)
					inarowDOWN++
				else
					break
				if(SpaceOwnerShip[PartnerR][PartnerC_3] == -1)
					inarowDOWN++
				else
					break
				if(SpaceOwnerShip[PartnerR][PartnerC_4] == -1){
					inarowDOWN++				
					hasWON = true
				}else
					break
			break
		}
		
		
		if((inarowDOWN + inarowUP) > 3)
			hasWON = true
		if(hasWON) 
			bluewins()
}



function CheckWinnerUPDOWNDiB(row, col) {
var hasWON = false

	var PartnerC1 = (col + 1)
	var PartnerC2 = (col + 2)
	var PartnerC3 = (col + 3)
	var PartnerC4 = (col + 4)
	var PartnerC_1 = (col - 1)
	var PartnerC_2 = (col - 2)
	var PartnerC_3 = (col - 3)
	var PartnerC_4 = (col - 4)
	var PartnerR1 = (row + 1)
	var PartnerR2 = (row + 2)
	var PartnerR3 = (row + 3)
	var PartnerR4 = (row + 4)
	var PartnerR_1 = (row - 1)
	var PartnerR_2 = (row - 2)
	var PartnerR_3 = (row - 3)
	var PartnerR_4 = (row - 4)
	var inarowUP = 0
	var inarowDOWN = 0
	
	
		while (true) {
				
				if(SpaceOwnerShip[PartnerR1][PartnerC1] == -1)
					inarowUP++
				else
					break
				if(SpaceOwnerShip[PartnerR2][PartnerC2] == -1)
					inarowUP++
				else
					break
				if(SpaceOwnerShip[PartnerR3][PartnerC3] == -1)
					inarowUP++
				else
					break
				if(SpaceOwnerShip[PartnerR4][PartnerC4] == -1){
					inarowUP++				
					hasWON = true
				}else
					break
			break
		}
		
		//alert(inarowUP)
		
		while (true) {
				
				if(SpaceOwnerShip[PartnerR_1][PartnerC_1] == -1)
					inarowDOWN++
				else
					break
				if(SpaceOwnerShip[PartnerR_2][PartnerC_2] == -1)
					inarowDOWN++
				else
					break
				if(SpaceOwnerShip[PartnerR_3][PartnerC_3] == -1)
					inarowDOWN++
				else
					break
				if(SpaceOwnerShip[PartnerR_4][PartnerC_4] == -1){
					inarowDOWN++				
					hasWON = true
				}else
					break
			break
		}
		
		//alert(inarowDOWN)
		
		if((inarowDOWN + inarowUP) > 3)
			hasWON = true
		if(hasWON) 
			bluewins()
}

function CheckWinnerDOWNUPDiB(row, col) {
var hasWON = false

	var PartnerC1 = (col + 1)
	var PartnerC2 = (col + 2)
	var PartnerC3 = (col + 3)
	var PartnerC4 = (col + 4)
	var PartnerC_1 = (col - 1)
	var PartnerC_2 = (col - 2)
	var PartnerC_3 = (col - 3)
	var PartnerC_4 = (col - 4)
	var PartnerR1 = (row + 1)
	var PartnerR2 = (row + 2)
	var PartnerR3 = (row + 3)
	var PartnerR4 = (row + 4)
	var PartnerR_1 = (row - 1)
	var PartnerR_2 = (row - 2)
	var PartnerR_3 = (row - 3)
	var PartnerR_4 = (row - 4)
	var inarowUP = 0
	var inarowDOWN = 0
	
	
		while (true) {
				
				if(SpaceOwnerShip[PartnerR1][PartnerC_1] == -1)
					inarowUP++
				else
					break
				if(SpaceOwnerShip[PartnerR2][PartnerC_2] == -1)
					inarowUP++
				else
					break
				if(SpaceOwnerShip[PartnerR3][PartnerC_3] == -1)
					inarowUP++
				else
					break
				if(SpaceOwnerShip[PartnerR4][PartnerC_4] == -1){
					inarowUP++				
					hasWON = true
				}else
					break
			break
		}
		
		//alert(inarowUP)
		
		while (true) {
				
				if(SpaceOwnerShip[PartnerR_1][PartnerC1] == -1)
					inarowDOWN++
				else
					break
				if(SpaceOwnerShip[PartnerR_2][PartnerC2] == -1)
					inarowDOWN++
				else
					break
				if(SpaceOwnerShip[PartnerR_3][PartnerC3] == -1)
					inarowDOWN++
				else
					break
				if(SpaceOwnerShip[PartnerR_4][PartnerC4] == -1){
					inarowDOWN++				
					hasWON = true
				}else
					break
			break
		}
		
		//alert(inarowDOWN)
		
		if((inarowDOWN + inarowUP) > 3)
			hasWON = true
		if(hasWON) 
			bluewins()
}














