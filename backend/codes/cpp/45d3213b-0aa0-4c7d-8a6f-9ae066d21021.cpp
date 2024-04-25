#include <bits/stdc++.h>
using namespace std;
#define ll long long

int main(){
    ios::sync_with_stdio(false);
    cin.tie(NULL);
    ll n;
    cin >>n;
    ll arr[n][n];
    ll sum = 0;
    ll maxn=0;
    for(ll i=0;i<n;i++)
    {
        for(ll j=0;j<n;j++)
        {
            cin >> arr[i][j];
            sum += arr[i][j];
        }
    }
    for(ll i=0;i<n;i++)
    {
      ll row=0,col=0;
        for(ll j=0;j<n;j++)
        {
            row+=arr[i][j];
            col+= arr[j][i];
        }
        maxn = max(row,maxn);
        maxn = max(col,maxn);
    }
    cout<<(maxn*n)-sum;
    return 0;
}