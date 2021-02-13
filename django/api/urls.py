from rest_framework import routers
from api.viewsets.rushing_stats import RushingStatsViewset

router = routers.SimpleRouter(trailing_slash=False)

router.register(
    r'rushing-stats', RushingStatsViewset, basename='rushing-stats'
)

urlpatterns = router.urls