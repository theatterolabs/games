	function initPlayer() 
	{
		return window.ysdk.getPlayer().then(_player => {
				// The player is logged in.
				window.player = _player;
				window.playerName = _player.getName();
				
				console.log('Welcome ' + window.playerName);
				  
				GetGameLeaderboards();
			});
	}
	
	function GetGameLeaderboards()
	{
		ysdk.getLeaderboards()
				  .then(_lb => 
				  {
					window.lb = _lb;
					window.hasLeaderboards = true;
					
					window.lb.getLeaderboardPlayerEntry('leaderboardmain')
					  .then(res => 
					  {
						window.myLeaderboardScore = res.score;
						console.log("My Score: " + res.score);
					  })
					  .catch(err => {
						if (err.code === 'LEADERBOARD_PLAYER_NOT_PRESENT') {
						  // Срабатывает, если у игрока нет записи в соревновательной таблице
						  console.log(err.code);
						}
						});
					
					RequestLeaderboardData();
					
				  });
	}
	
	function SubmitLeaderboardScore(newScore, randomLvl)
	{
		if (typeof window.ysdk !== 'undefined' && window.lb != null) 
		{
			if (randomLvl >= 1)
			{
				newScore = window.myLeaderboardScore + 1;
			}
		
			console.log('SubmitLeaderboardScore ' + newScore);
			
			if (newScore > window.myLeaderboardScore)
			{
				window.myLeaderboardScore = newScore;
			
				if (window.lb != null)
				{
					console.log('setLeaderboardScore ' + window.myLeaderboardScore);
					window.lb.setLeaderboardScore('leaderboardmain', window.myLeaderboardScore);
					
					window.leaderboardReqTime = -60;
				}
				else
				{
					console.log('invalid leaderboard');
				}
			}
		}
	}
	
	function RequestLeaderboardData()
	{
		var dateNow3 = new Date();
		var secondsSinceEpoch3 = Math.round(dateNow3.getTime() / 1000);
		
		if (typeof window.ysdk !== 'undefined') 
		{
			
			if (window.leaderboardReqTime !== 'undefined' && (secondsSinceEpoch3 - window.leaderboardReqTime > 60))
			{
				window.leaderboardReqTime = secondsSinceEpoch3;
			
				console.log('GetLeaderboardEntries');
				
				if (window.lb != null)
				{
					window.LeaderboardEntriesText = '';
				
					window.lb.getLeaderboardEntries('leaderboardmain', { quantityTop: 10, includeUser: true, quantityAround: 3 })
						.then(res => {
							window.LeaderboardEntries = res;
							console.log(res);
							
							window.LeaderboardEntriesText = '';
							
							var i;
							for (i = 0; i < res.entries.length && i < 17; i++) {
							
								var rank = res.entries[i].rank;
								var score = res.entries[i].score;
								var allowName = res.entries[i].player.scopePermissions.public_name;
								var playerName = "";
								if (allowName != "allow")
								{
									playerName = "X";
								}
								else
								{
									playerName = res.entries[i].player.publicName;
								}
							
								if (i == 0)
								{
									console.log(rank + " - " + score);
								}
								
								window.LeaderboardEntriesText += rank + ' - ' + playerName + " - " + score + '\n';
							}
							
							if (res.entries.length == 0)
							{
								window.LeaderboardEntriesText = 'No data';
							}
							
						});
				}
				else
				{
					window.LeaderboardEntriesText = 'No data';
				}
			}
		}
	}
	
	function GetLeaderboardEntries()
	{
		if (typeof window.ysdk !== 'undefined')
		{
			GetGameLeaderboards();
		}
		
	}
	
	function InitExternEval() 
    {
		var dateNow2 = new Date();
		var secondsSinceEpoch2 = Math.round(dateNow2.getTime() / 1000);
	
		if (typeof window.ysdk === 'undefined') 
		{
			console.log('InitExternEval');
			
			window.adRunning = 0;
			window.adReward = 0;
			window.rewardError = 0;
			window.canReward = 1;
			
			window.callTime = secondsSinceEpoch2;
			window.adPlatform = 4;
			window.player = null;
			window.playerName = '';
			window.lb = null;
			window.hasLeaderboards = false;
			window.myLeaderboardScore = 0;
			window.LeaderboardEntries = null;
			window.LeaderboardEntriesText = '';
			window.leaderboardReqTime = -60;

			window.gameLang = '';
		
			 YaGames
                .init()
                .then(ysdk_ => {
                    window.ysdk = ysdk_;
                     window.ysdk.adv.showFullscreenAdv({
                        callbacks: {
                             onClose: function() {
								console.log('Video ad closed.');
						
								window.adRunning = 0;
							},
						
							onOpen: function() {
								console.log('Video ad open.');
						
								window.adRunning = 1;
							},
							
							onError: function() {
								
							},
							
							onOffline: function() {
								
							}
							}
                    });
					
					

					// initPlayer().catch(err => {
							// // The player is not authorized, throws the USER_NOT_AUTHORIZED exception.

							    // });
								
					window.gameLang = window.ysdk.environment.i18n.lang;
			
                });
			
		}
       
    }
	
	function ExternEval() 
	{
		var dateNow = new Date();
		var secondsSinceEpoch = Math.round(dateNow.getTime() / 1000);
        
		if (typeof window.ysdk !== 'undefined') 
		{
			console.log('ExternEval');
		
			if (window.callTime !== 'undefined' && (secondsSinceEpoch - window.callTime > 180) && window.adRunning != 1)
			{
				console.log('ExternEval 2');
			
				window.callTime = secondsSinceEpoch;
		
				window.ysdk.adv.showFullscreenAdv({
						callbacks: {
							onClose: function() {
								console.log('Video ad closed.');
						
								window.adRunning = 0;
							},
						
							onOpen: function() {
								console.log('Video ad open.');
						
								window.adRunning = 1;
							},
							
							onError: function() {
								
							},
							
							onOffline: function() {
								
							}
							
						}
					});
			}
			
		}
	}
		
	function PreloadRewarded() 
	{
		
	}
	
	function ShowRewarded() 
    {
        console.log('ShowRewarded');
		
		if (typeof window.ysdk !== 'undefined' && window.adRunning != 1) 
		{
				ysdk.adv.showRewardedVideo({
				callbacks: {
					onOpen: () => {
						console.log('Video ad open.');
						
						window.adRunning = 1;
					},
					onRewarded: () => {
						console.log('Rewarded!');
						
						window.adReward = 1;
					},
					onClose: () => {
						console.log('Video ad closed.');
						
						window.adRunning = 0;
					}, 
					onError: (e) => {
						console.log('Error while open video ad:', e);
						
						window.rewardError = 1;
					}
				}
			});
		}
    }
	
	function TakeReward()
	{
		console.log('TakeReward');
	
		window.adReward = 0;
	}
	
	function RewardErrorHandled()
	{
		console.log('RewardErrorHandled');
	
		window.rewardError = 0;
	}
	
	function OpenLink()
	{
		
	}
	


const scriptsInEvents = {

		async Ads_Event2_Act1(runtime, localVars)
		{
			InitExternEval();
		},

		async Ads_Event3_Act1(runtime, localVars)
		{
			ExternEval();
		},

		async Ads_Event4_Act1(runtime, localVars)
		{
			runtime.globalVars.adActive = window.adRunning;
		},

		async Ads_Event4_Act2(runtime, localVars)
		{
			runtime.globalVars.adReward = window.adReward;
		},

		async Ads_Event4_Act3(runtime, localVars)
		{
			runtime.globalVars.canReward = window.canReward;
		},

		async Ads_Event9_Act1(runtime, localVars)
		{
			console.log("Pressed K");
			window.adRunning = 1;
		},

		async Ads_Event10_Act1(runtime, localVars)
		{
			console.log("Pressed L");
			window.adRunning = 0;
		}

};

self.C3.ScriptsInEvents = scriptsInEvents;

