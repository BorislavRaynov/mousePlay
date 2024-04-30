from django.shortcuts import render


def visualization(request):
    return render(request, 'visualization.html')
